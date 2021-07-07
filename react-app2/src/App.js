/*
Hook(훅)
  : 리액트 기존 버전에서는 간단한 기능을 제작할때만 함수를 사용했다.
  state를 변경하는 것은 클래스형 컴포넌트에서만 가능했었지만,
  16.8버전부터 Hook을 통해 함수형 컴포넌트에서도 state값을
  변경할 수 있게 되었다. 리액트 Hook은 useXXX()와 같은 이름을 가진다.
  사용하기 위해서는 반드시 import 처리 해야한다.
*/
import React, {useState} from 'react';
import './App.css';

/*
아래에서 생성한 함수형/ 클래스형 컴포넌트를 화면에 출력하기위해
<컴포넌트명>과 같은 태그 형태로 사용한다.
*/
function App() {
  return (
    <div className="container">
      <h1>Class cs Function Style</h1>
      {/*
      부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달할때는
      props를 사용한다. HTML속성과 같이 사용하는 특징이 있다.
      */}
      <FuncComponent initNumber={2}></FuncComponent>
      <ClassComponent initNumber={2}></ClassComponent>
    </div>
  );
}

/*
함수형 컴포넌트
  : 출력할 내용을 즉시 return하면 된다.
  함수안에 또 다른 함수를 사용할 수 없으므로
  render() 함수가 별도로 존재하지 않고,
  자기 자신이 render() 역할을 한다.

  부모컴포넌트에서 props로 전달한 데이터를 받을때
  매개변수를 사용한다. 매개변수이므로 이름은 props가 아닌
  다른 이름을 사용해도 된다.
*/
function FuncComponent(props) {

  /*
  useState()로 얻어온 값을 출력하면 크기가 2인 배열로 출력된다.
  0번째 요소는 인자로 전달한 값(상태값)이고,
  1번째 요소는 state값을 변경할 수 있는 함수이다.
  */
  var numberState = useState(props.initNumber);
  console.log("numberState : ",numberState);
  var number =numberState[0]; // 값
  var setNumber = numberState[1]; // 함수

  return (
    <div className="container">
      <h2>function style component</h2>
      <p>initNumber : {number}</p>
      {/* setState()로 전달된 2번째 인자를 setNumber라는 함수명으로
      받았으므로 해당 버튼의 이벤트 처리에서 사용할 수 있다.
      버튼 클릭시 number값을 생성된 난수로 변경하게 된다. */}
      <input type="button" value="난수생성" onClick={function () {
        setNumber(Math.random());
      }}
      
      />
    </div>
  );
}

/*
클래스형 컴포넌트
  : React.Component를 상속하여 선언한다. 수명주기 함수중에
  render() 함수를 통해 랜더링 하므로 필수적으로 선언해야 한다.

  부모 컴포넌트에서 전달한 props를 받을때에는 'this.props.속성명'
  으로 출력한다.


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

  // 클래스형 컴포넌트에서 state는 JSON으로 생성한다.
  state = {
    number : this.props.initNumber
  }
  render() {
    return (
      <div className="container">
      <h2>class style component</h2>
      <p>initNumber : {this.state.number}</p>
      {/* 클래스형 컴포넌트에서는 setState()를 통해 state값을
      변경할 수 있다. */}
      <input type="button" value="난수생성" onClick={ () => {
        this.setState({number:Math.random()});
      }}/>
      {/* function()을 사용할 경우 컴포넌트와의 바인딩을 위해 bind()함수를 사용해야 하지만
      화살표함수(Arrow Function)을 사용하면 별도의 바인딩을 하지 않아도 된다. */}
      
      </div>
    );
  }
}

export default App;
