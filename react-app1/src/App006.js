// 해당 문서에서 React의 기능을 사요요하기 위해 import한다.
import React, {Component} from 'react';
import './App.css';

/*
외부 js파일로 모듈화한 컴포넌트를 해당 문서로 import하기 위한
구문으로, export default로 지정한 이름을 그대로 사용하면 된다.
  형식]
  import 변수로 사용할 이름 from '컴포넌트경로'
*/
import Subject from './components/Subject';
import Navi from './components/Navi';
import Content from './components/Content';

/* 클래스명 컴포넌트(해당 실습에서 사용) */
class App extends Component{
  /* state를 추가하기 위해 생성자를 정의한다. */
  /*
  상단의 링크를 눌렀을때 mode를 welcome으로 변경.
  Navi의 링크를 눌렀을때 mode를 read로 변경.
  각 내용을 가져와서 출력하기 위해 state를 추가함.
  - mode 추가
  - welcome 추가
  */
  constructor(props){
    super(props);
    // state를 생성 및 초기화
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
  /*
  Navi 컴포넌트에 반복되는 링크를 for문으로 처리하기 위해
  state에 contents 항목을 추가한다. 객체 3개를 저장한 배열의 형태이다.
  Navi컴포넌트로 props를 통해 전달한다.
  */
  render(){
    /*
    mode의 상태에 따라서 제목과 내용을 다르게 출력할려고
    아래 2개의 변수를 추가한 후 mode값에 따른 if문을 작성한다.
    */
    let _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode === 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }

    /*
    앞에서 설정한 _title, _desc를 Content 컴포넌트의 props로
    기술한다. 그리고 개발자 모드에서 mode를 read로 변경해본다.
    */
    return(
      <div className="App">
        {/* /Hello World */}
        <Subject title={this.state.subject.title}  sub={this.state.subject.sub} />
        <Navi data={this.state.contents}/>
        <Content title={_title} desc={_desc} />
      </div>
    );
  }
}

export default App;
