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
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }

    /*
    Subject 컴포넌트를 우선 App컴포넌트 안으로 가져온다.
    props로 처리된 부분을 state로 수정한다.
    링크에 onClick 이벤트를 추가한다.
    이벤트 객체를 통해 새로고침 되지 않도록
    e.preventDefault() 함수를 추가한다.
    함수에서 state값을 변경하기 위해 bind() 해준다.
    */
    return(
      <div className="App">
        {/* /Hello World */}
        <Subject title={this.state.subject.title}  sub={this.state.subject.sub} /> 
        <header>
          <h1>
            <a href="/" onClick={function(e){
              //alert('이벤트 확인용');
              //console.log(e);
              e.preventDefault();
              this.setState({mode:'welcome'});
              }.bind(this)}>{this.state.subject.title}</a>
          </h1>
          {this.state.subject.sub}
        </header>
        <Navi data={this.state.contents}/>
        <Content title={_title} desc={_desc} />
      </div>
    );
  }
}

export default App;
