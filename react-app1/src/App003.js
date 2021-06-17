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
