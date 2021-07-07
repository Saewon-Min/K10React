
/*
react-router-dom
  : 리액트는 기본적으로 화면의 새로고침 없이 화면을
  갱신한다. 이 경우 주소가 하나로 고정되기 때문에
  즐겨찾기와 같은 기능을 사용할 수 없다.
  어떤 주소로 들어왔을때 그 주소를 알아내어 그에 해당하는
  컴포넌트를 렌더링하고, 그 상태를 관리하기 위해 내부적으로
  state나 props를 관리할 수 있게 해주는 도구가 react-router-dom이다.


*/
import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch , Link, NavLink, useParams} from "react-router-dom";
/*
BrowserRouter
  : 리액트 라우터 돔을 적용하고 싶은 컴포넌트의 최상위 컴포넌트를
  감싸주는 Wrapper(래퍼)로 사용한다.

Route
  : URL에 따른 적당한 컴포넌트를 렌더링 하기 위해 사용하는
  컴포넌트이다.

Switch
  : URL과 일치하는 첫번째 컴포넌트가 발견되면 나머지 컴포넌트는 아예
  렌더링 하지 않는 역할을 한다. 즉, 최초로 발견되는 컴포넌트 하나만 
  렌더링 한다.

Link
  : 현재 링크를 클릭할때마다 페이지가 새로고침 되어 갱신된다.
  리액트는 화면의 깜빡임없이 화면이 갱신되어야 하므로 링크를 눌렀을때
  페이지가 리로드 되지 않도록 처리해준다.

NavLink
  : Link와 동일한 기능을 제공하지만 추가적으로 class 속성을 엘리먼트에 
  삽입해준다.

Nested Routing
  : 중첩라우팅이란 라우팅 맵핑을 최상위 컴포넌트 뿐만 아니라 여러개의
  컴포넌트에 걸쳐서 단계별로 정의하는 라우팅 기법이다.

※ 라우팅이란
  : 사용자가 어떤 주소로 들어왔을때 그 주소에 해당하는 페이지를
  사용자에게 보내주는 것을 말한다.

*/

/*
exact : <Route 컴포넌트에 삽입하면 path(경로)와 정확히 일치하는
        경우에만 라우팅 된다. 만약 포함하지 않으면 Topics를 눌렀을때
        Home이 같이 보이는 문제가 발생한다.
*/
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Hello React Router DOM</h1>
        <ul>
          <li><a href="/">Home(a)</a></li>
          <li><a href="/Topics">Topics(a)</a></li>
          <li><a href="/Contact">Contact(a)</a></li>
        </ul>
        {/* <ul>
          <li><Link to="/">Home(Link)</Link></li>
          <li><Link to="/Topics">Topics(Link)</Link></li>
          <li><Link to="/Contact">Contact(Link)</Link></li>
        </ul> */}
        <ul>
          <li><NavLink exact to="/">Home(NavLink)</NavLink></li>
          <li><NavLink to="/Topics">Topics(NavLink)</NavLink></li>
          <li><NavLink to="/Contact">Contact(NavLink)</NavLink></li>
        </ul>
        <Route exact path="/"><Home></Home></Route>
        <Route path="/Topics"><Topics></Topics></Route>
        <Route path="/Contact"><Contact></Contact></Route>

        <h3>Switch 적용하기</h3>
        <Switch>
        <Route exact path="/"><Home></Home></Route>
        <Route path="/Topics"><Topics></Topics></Route>
        <Route path="/Contact"><Contact></Contact></Route>
        <Route path="/">404:Page Not Found</Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

function Home() {
  return(
    <div>
      <h2>Home</h2>
      Home컴포넌트
    </div>
  );
}

// Topics의 메뉴 링크를 구성하기 위한 JSON배열
// let contents = [
//   {id:1 , cate :'free' , title:'자유게시판' , desc:'<h2>자유게시판 리스트</h2>'},
//   {id:2 , cate :'qna' , title:'QNA게시판' , desc:'<h2>QNA게시판 리스트</h2>'},
//   {id:3 , cate :'faq' , title:'FAQ게시판' , desc:'<h2>FAQ게시판 리스트</h2>'}
// ];

let contents = [
  {id:1 , cate :'free' , title:'자유게시판' , desc:'자유게시판 리스트'},
  {id:2 , cate :'qna' , title:'QNA게시판' , desc:'QNA게시판 리스트'},
  {id:3 , cate :'faq' , title:'FAQ게시판' , desc:'FAQ게시판 리스트'}
];


function Topics() {
  // 링크를 구성할 li태그를 저장할 배열
  let liTag = [];

  // 배열의 크기만큼 반복
  for(var i=0; i<contents.length; i++){
    // 반복 횟수만큼 배열에 li태그를 추가한다.
    liTag.push(
      <li key={contents[i].id}><NavLink to={"/Topics/"+contents[i].cate}
      >{contents[i].title}</NavLink></li>
    );
    /*
    li태그와 같이 반복되는 엘리먼트를 사용하는 경우 React는 중복되지 않는
    key prop을 요구한다. 때문에 key라는 prop을 추가해야 한다.
    */
  }
  return(
    <div>
      <h2>Topics</h2>
      <div>Topics컴포넌트</div>
      <ul>
        {liTag}
      </ul>
      {/* <ul>
        <li><NavLink exact to="/Topics/free">자유게시판</NavLink></li>
        <li><NavLink to="/Topics/qna">QNA게시판</NavLink></li>
        <li><NavLink to="/Topics/faq">FAQ게시판</NavLink></li>
      </ul> */}
      {/* <Switch>
        <Route exact path="/Topics/free"><h2>자유게시판 리스트</h2></Route>
        <Route path="/Topics/qna"><h2>QNA게시판 리스트</h2></Route>
        <Route path="/Topics/faq"><h2>FAQ게시판 리스트</h2></Route>
      </Switch> */}
      <Route path="/Topics/:topic_cate">
        <Desc></Desc>
      </Route>
    </div>
  );
}

/*
useParams()
  : 파라미터로 전송된 값을 받아오기 위한 훅
  <Route path="/Topics/:topic_cate"> 와 같이 라우팅 처리를 할때
  파라미터를 ":변수명"과 같은 형태로 전송한다.
*/
// 파라미터에 따라 내용 부분을 출력하기 위한 컴포넌트
function Desc() {
  let params = useParams()
  console.log("params",params); //{topic_cate: "faq"} 와 같이 전송됨
  let topic_cate = params.topic_cate; // 파라미터 값을 얻어옴

  // 일치하는 파라미터가 없을 경우 출력할 기본 내용
  let selected_item = {
    title : "Sorry", desc:"Not Found"
  }
                          
  // 배열내에서 파라미터와 일치하는 값이 있는지 확인
  for(var i=0; i<contents.length; i++){
    if(contents[i].cate === topic_cate){
      // 일치하는 값이 확인되면 값을 얻어옴
      selected_item = contents[i];
      break;
    }
  }
  // 얻어온 내용을 렌더링한다. 렌더링 된 내용은 Topics컴포넌트 내에서 삽입된다.
  return(
    <div>
      <h3>{selected_item.title}</h3>
      {selected_item.desc}
    </div> 
  );
}


function Contact() {
  return(
    <div>
      <h2>Contact</h2>
      Contact컴포넌트
    </div>
  );
}



export default App;
