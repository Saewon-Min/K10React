import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*
App.js로부터 가져온 내용을 App이라는 이름으로 사용한다.
즉, App은 우리가 변경할 수 있다. 실습시에는 MyReactApp이라는
이름으로 변경하고 render() 함수에 적용시킨다.
*/ 
import MyReactApp from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(<MyReactApp />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
