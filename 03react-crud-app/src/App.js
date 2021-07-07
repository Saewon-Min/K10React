import React, {Component} from 'react';
import './App.css';


import Subject from './components/Subject';
import Navi from './components/Navi';
import Content from './components/Content';
import Buttons from './components/Buttons';
import CreateForm from './components/CreateForm';
import UpdateForm from './components/UpdateForm';


class App extends Component{

  constructor(props){
    super(props);

    this.max_content_id=3;
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

    let _title, _desc, _article = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <Content title={_title} desc = {_desc}></Content>;
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
      _article = <Content title={_title} desc = {_desc}></Content>;
    }else if(this.state.mode==='create'){
      _article = <CreateForm onSubmitValue={function(_title,_desc){
        console.log(_title, _desc);
        this.max_content_id = this.max_content_id + 1;

        var _contents = this.state.contents.concat(
          {id:this.max_content_id, title:_title, desc:_desc}
        );

        this.setState({ 
          contents : _contents,
          mode : "read",
          selected_content_id : this.max_content_id
        });
      }.bind(this)}></CreateForm>;
    }else if(this.state.mode==='update'){
    
      //let _readData = this.state.contents[this.state.selected_content_id-1];
      let _readData;
      let i=0;
      while(i<this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id===this.state.selected_content_id){
          _readData = data;
          break;
        }
        i++;
      }


      _article = <UpdateForm readData={_readData} onSubmitValue={function(_id,_title,_desc){
        console.log(_id,_title,_desc);

     
        var _contents = Array.from(this.state.contents);
        
        // _contents[this.state.selected_content_id-1] 
        //   = {id:Number(_id), title:_title, desc: _desc};

        let i=0;
        while(i<_contents.length){
        var data = _contents[i];
        if(data.id===Number(_id)){
          _contents[i] = {id:Number(_id), title:_title, desc: _desc};
          break;
        }
        i++;
      }
        this.setState({
          contents : _contents,
          mode : "read"
        });


      }.bind(this)}></UpdateForm>;
    }else if(this.state.mode==='delete'){
      /*
      삭제를 여기에서 처리하면 렌더링이 2번 발생하게 되므로
      비효율적이다.
      */
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
            //alert('확인용(Navi)');s
            console.log("content_id",id);
            this.setState({
              mode:'read',
              selected_content_id : Number(id)
            });
          }.bind(this)}/>

          <Buttons onChangeMode={
            function(btn_mode){
              if(btn_mode==='delete'){
                // 리엑트에서는 confirm() 사용시 window를 반드시 붙여야한다.
                if(window.confirm('삭제하시겠습니까?')){
                  // 기존의 배열을 복사한다.
                  var _contents = Array.from(this.state.contents);
                  var i=0;
                  // 복사한 배열에서 삭제할 id값을 가진 요소를 찾는다.
                  while(i<_contents.length){
                    if(_contents[i].id === this.state.selected_content_id){
                      // splice()를 통해 i번째 인덱스 요소를 1개 삭제한다.
                      _contents.splice(i,1);
                      break;
                    }
                    i++;
                  }
                  // 삭제 후에는 게시물이 없어지므로 welcome으로 이동한다.
                  this.setState({
                    mode : 'welcome',
                    contents : _contents
                  });
                }
              }
              else{
                this.setState({
                  mode : btn_mode
                });
            }
            }.bind(this)}></Buttons>
            {_article}

      </div>
    );
  }
}

export default App;
