import React, {Component} from 'react';
import './App.css';


import Subject from './components/Subject';
import Navi from './components/Navi';
import Content from './components/Content';
import Buttons from './components/Buttons';


class App extends Component{

  constructor(props){
    super(props);
    this.state = {
          mode : 'welcome',
          selected_content_id : 2,
          welcome : {title:'Welcome',desc:'Hello, React'},
          subject : {title:"WEB(st)", sub:"World Wide Web(st)"},
          contents : [
                        {id:1, title:'HTML',desc:'HTML은 내용을 출력합니다.'},
                        {id:2, title:'CSS',desc:'CSS는 스타일을 지정합니다.'},
                        {id:3, title:'JavaScript', desc:'JS는 화면을 동적으로 제어합니다.'}
                      ]
        }
  }

  render(){

    let _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode === 'read'){
      //_title = this.state.contents[0].title;
      //_desc = this.state.contents[0].desc;
      var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i++;
      }
    }


    return(
      <div className="App">
        <Subject title={this.state.subject.title}  sub={this.state.subject.sub} 
          onChangePage = {function(){
            alert('확인용(부모)');
            this.setState({mode:'welcome'});
          }.bind(this)}/> 
        

        <Navi data={this.state.contents}
          onChangePage={function(id){
            //alert('확인용(Navi)');
            console.log("content_id",id);
            this.setState({
              mode:'read',
              selected_content_id : Number(id)
            });
          }.bind(this)}/>
          {/* 
          추가, 수정, 삭제 버튼 컴포넌트를 삽입한다.
          각 버튼을 눌렀을때 mode를 변경하기 위해 사용자가 정의한
          이벤트를 props를 통해 전달한다.
          */}
          <Buttons onChangeMode={
            function(btn_mode){
              this.setState({
                mode : btn_mode
              });
            }.bind(this)}></Buttons>
        <Content title={_title} desc={_desc} />
      </div>
    );
  }
}

export default App;
