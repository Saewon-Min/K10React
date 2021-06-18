import React, {Component} from 'react';
import './App.css';


import Subject from './components/Subject';
import Navi from './components/Navi';
import Content from './components/Content';

class App extends Component{
  /*
  상단의 링크를 눌렀을때 mode를 welcome으로 변경.
  Navi의 링크를 눌렀을때 mode를 read로 변경.
  각 내용을 가져와서 출력하기 위해 state를 추가함.
  - mode 추가
  - welcome 추가
  */
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
      /*
      selected_content_id값과 일치하는 객체를 찾아서 제목과 내용 부분을
      설정한다.
      */
      var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
      }
    }

    /*
    Subject에 작성했던 이벤트를 Navi에도 붙여준다.

    */
    return(
      <div className="App">
        {/* /Hello World */}
        <Subject title={this.state.subject.title}  sub={this.state.subject.sub} 
          onChangePage = {function(){
            alert('확인용(부모)');
            this.setState({mode:'welcome'});
          }.bind(this)}/> 
        

        {/* 자식(Navi)에서 보내준 data-id값을 인자로 받은 후 selected_content_id값을 변경한다.  */}
        <Navi data={this.state.contents}
          onChangePage={function(id){
            //alert('확인용(Navi)');
            console.log("content_id",id);
            this.setState({
              mode:'read',
              selected_content_id : Number(id)
            });
          }.bind(this)}/>
        <Content title={_title} desc={_desc} />
      </div>
    );
  }
}

export default App;
