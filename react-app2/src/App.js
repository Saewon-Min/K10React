import React, {Component} from 'react';
import './App.css';


class App extends Component {
  // 내용을 출력하기 위한 state
  state = {
    article : {title:'Welcome',desc:'Hello Ajax!!'}
  }
  render() {
    return (
      <div className="App">
         <h1>WEB</h1>
         {/* 각 링크를 클릭할 경우 인자로 전달되는 id값을 통해
         json파일을 읽어서 state를 변경한다. */}
          <Nav
            myLinkClick={(id)=>{
              fetch(id+'.json') 
                .then(function(result){
                  return result.json(); 
                })
                .then(function(json){
                  /* 
                  JSON에서 읽어온 내용으로 state를 변경함
                  state가 변경되면 render()가 재호출됨
                  */
                   this.setState({
                    article:{
                      title:json.title,
                      desc:json.desc
                    }
                  });
                 
                }.bind(this));
            }}
          
          ></Nav>
         <Article title={this.state.article.title} desc={this.state.article.desc}></Article>
      </div>
       
    );
  }
}

// 네비 컴포넌트 정의
class Nav extends Component{
  // state를 선언
  state  = {
    list : []
  }
  // 수명주기 함수 중 render()가 호출되기 전에 미리 호출됨(전처리에 사용)
  componentDidMount(){
    // 비동기 처리를 위한 fetch()함수를 호출한다.
    fetch('list.json') // 해당 JSON파일을 읽어온다
      .then(function(result){
        // 요청에 성공한 경우 콜백데이터를 반환한다.
        return result.json(); 
      })
      .then(function(json){
        // 앞의 then에서 반환한 값이 해당 then절로 전송된다.
        console.log(json);
        // state값을 설정한다. 
        this.setState({list:json});
      }.bind(this));
  }

  // 렌더링을 처리하는 함수
  render() {
    // 네비의 반복되는 <li>태그를 저장할 배열
    var listTag=[];
    // state에 저장된 list의 개수만큼 반복
    for (var i = 0; i < this.state.list.length; i++) {
      // 각 인덱스의 객체를 얻어옴
      var li = this.state.list[i];
      // 배열에 <li> 태그를 추가함
      listTag.push(
        <li key={li.id}>
          <a href={li.id} data-id={li.id} onClick={(e)=>
            {e.preventDefault(); // 전송(화면 새로고침)을 중단시켜줌
            console.log("링크 출력함");
            // 이벤트 발생시 props를 통해 함수를 전달한다.
            this.props.myLinkClick(e.target.dataset.id);
          }}>{li.title}</a>
        </li>
      );
      /*
          key : li 혹은 td태그와 같이 반복되는 개체가 있을 경우 React는
            중복되지 않는 key prop을 요구한다.
            
          data-id : 이벤트 객체를 통해 지정된 값을 얻어올 수 있다.
            e.target.dataset으로 얻어오게 된다.
      */
      
    }

    return (
      <nav>
        <ul>
          {listTag}
        </ul>
      </nav>
    );
  }


}

class Article extends Component{
  render() {
    return (
       <article>
         <h2>{this.props.title}</h2>
         {this.props.desc}
       </article>
    );
  }
}

export default App;
