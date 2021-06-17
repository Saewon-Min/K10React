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
    return(
      <header>
        <h1>WEB</h1>
        world wide web
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


class Content extends Component{
  render(){
    return(
      <article>
          <h2>HTML</h2>
          HTML is HyperText Markup Language.
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
        <Subject />
        <Navi />
        <Content />
      </div>
    );
  }
}

export default App;
