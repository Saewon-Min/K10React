// 해당 문서에서 React의 기능을 사요요하기 위해 import한다.
import React, {Component} from 'react';
import './App.css';


/* 함수형 컴포넌트(해당 실습에서는 사용하지 않는다) */
// function App extends Component{
//   return (
//     <div className="App">
//       Hello React
//     </div>
//   );
// }

/* basicForm.html의 내용을 컴포넌트로 만든다. */
/*
컴포넌트를 만들때에는 항상 하나의 최상위 태그만 있어야한다.
그렇지 않으면 컴파일 에러가 발생한다.
CDN방식에서는 React.Component를 상속하지만 모듈화 방식에서는
아래와 같이 상속하면 된다.
*/
class Subject extends Component{
  render(){
    /*
    Subject 컴포넌트를 렌더링 시 속성으로 추가한 내용을
    props로 얻어와서 적용한다.
    */
    return(
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }
}

class Navi extends Component{
  render(){
    return(
      <nav>
        <ul>
            <li><a href="1.html">HTML</a></li>
            <li><a href="2.html">CSS</a></li>
            <li><a href="3.html">JavaScript</a></li>
        </ul>
      </nav>
    );
  }
}

// 컨텐츠 부분도 출력 내용을 props로 변경한다.
class Content extends Component{
  /*
  props는 컴포넌트 추가시 HTML의 속성처럼 추가하는 부분으로
  사용할때는 "this.props.속성명" 으로 기술하면 된다.
  */
  render(){
    return(
      <article>
          <h2>{this.props.title}</h2>
          {this.props.desc}
      </article>
    );
  }
}


/* 클래스명 컴포넌트(해당 실습에서 사용) */
class App extends Component{
  render(){
    return(
      <div className="App">
        {/* /Hello World */}
        <Subject title="WEB(pr)"  sub="world wide web(pr)" />
        <Navi />
        <Content title="HTML(pr)" desc="HTML is HyperText Markup Language.(pr)" />
      </div>
    );
  }
}

export default App;
