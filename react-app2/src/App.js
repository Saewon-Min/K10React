import React from 'react';
import './App.css';

/*
아래에서 생성한 함수형/ 클래스형 컴포넌트를 화면에 출력하기위해
<컴포넌트명>과 같은 태그 형태로 사용한다.
*/
function App() {
  return (
    <div className="container">
      <h1>Class cs Function Style</h1>
      <FuncComponent></FuncComponent>
      <ClassComponent></ClassComponent>
    </div>
  );
}

/*
함수형 컴포넌트
  : 출력할 내용을 즉시 return하면 된다.
  함수안에 또 다른 함수를 사용할 수 없으므로
  render() 함수가 별도로 존재하지 않고,
  자기 자신이 render() 역할을 한다.
*/
function FuncComponent() {
  return (
    <div className="container">
      <h2>function style component</h2>
    </div>
  );
}

/*
클래스형 컴포넌트
  : React.Component를 상속하여 선언한다. 수명주기 함수중에
  render() 함수를 통해 랜더링 하므로 필수적으로 선언해야 한다.

형식]
class 클래스명 extends React.Component{
  render(){
    return(
        jsx코드 (javascript에 html문법을 쓴것)
    );
  }
}

※jsx란(JavaScript eXtension)
HTML 문법을 JavaScript 코드 내부에 쓴 것.
JavaScript의 확장 버전이고 결론은 자바스크립트이다.

"React에서 HTML을 표현할 때, JSX를 사용한다. 
외관상 HTML같은 마크업 언어를 리터럴로 입력하는 것으로 보이는데, 
빌드 시 Babel에 의해 자바스크립트로 변환된다. 
자바스크립트 코드를 HTML처럼 표현할 수 있기 때문에 용이한 개발이 가능하다." 
즉, JSX는 자바스크립트 안에서 HTML 문법을 사용해서 
view를 구성할 수 있게 도와주는 자바스크립트 문법이다.

*/ 
class ClassComponent extends React.Component{
  render() {
    return (
      <div className="container">
      <h2>class style component</h2>
    </div>
    );
  }
}

export default App;
