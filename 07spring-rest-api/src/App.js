import React,{Component} from 'react';
import './App.css';

class Top extends Component{
  render() {
    return (
      <div className="row" id="lay_top">
        <p>TOP</p>
      </div>
    );
  }
}

class Left extends Component{
  render() {
    return (
      <div className="col-lg-2" id="lay_left">
          <p>LEFT</p>
      </div>
    );
  }
}

class Bottom extends Component{
  render() {
    return (
      <div className="row" id="lay_bottom">
          <p>BOTTOM</p>
      </div>
    );
  }
}

// 목록 처리를 위한 컴포넌트
// 페이지 처리를 위한 state 추가
class ListContents extends Component{
  state = {
    blists : [],
    pageNum :1
  }

  // render() 함수 호출 전 전처리를 위한 수명주기 함수
  componentDidMount(){
    let pageNum = this.state.pageNum;

    // fetch() 함수를 통해 SPRING REST API 서버로 비동기 요청
    fetch('http://localhost:8082/jsonrestapi/restapi/boardList.do?nowPage='+pageNum)
      .then(function(result){
        return result.json();
      })
      .then(function(json){
        console.log(json);
        // SPRING 서버에서 받은 JSON을 통해 state값 변경
        this.setState({blists:json});
      }.bind(this));

  }
  render() {
    console.log('ListContent render 완료')
    let listTr = [];
    for(var i=0; i<this.state.blists.length ; i++){
      var row = this.state.blists[i];

      /*
      목록의 링크를 클릭하면 props를 통해 myBoardView() 함수를 전달한다.
      이때 data-id로 지정된 일련번호와 읽기모드인 'view'를 같이 전달한다.
      */
      listTr.push(
        <tr align="center" key={row.num}>
          <td>{row.num}</td>
          <td align="left"><a href={row.num} data-id={row.num}
          onClick={
            (e)=>{
              e.preventDefault();
              this.props.myBoardView(e.target.dataset.id,'view');
            }
          }>{row.title}</a></td>
          <td align="center">{row.id}</td>
          <td align="center">{row.visitcount}</td>
          <td align="center">{row.postdate}</td>
        </tr>
      );


    }
    return (
      <div className="col-lg-10" id="lay_contents">
          <h2>게시판 목록</h2>
          <table className="table table-bordered">
          <thead>
              <tr>
                  <th width="10%">번호</th>
                  <th width="*">제목</th>
                  <th width="15%">작성자</th>
                  <th width="15%">조회수</th>
                  <th width="15%">작성일</th>
              </tr>
            </thead>
            <tbody>
              {listTr}
            </tbody>
          </table>
      </div>
    );
  }
}

// 내용보기
class ViewContents extends Component{
  state = {
    bview:{
      content:'ㅎㅎㅎ'
    }
  }
  componentDidMount(){
  fetch('http://localhost:8082/jsonrestapi/restapi/boardView.do?num='+this.props.num)
  .then((result)=>{
    return result.json();
  })
  .then((json)=>{
    console.log(json);
    // SPRING 서버에서 받은 JSON을 통해 state값 변경
    // API를 통해 얻어온 결과를 통해 state를 변경한다.
    this.setState({bview:json});
  });
  }
  render() {
    console.log("ViewContents -> num",this.props.num);
    // 부모 컴포넌트에서 전달한 props를 통해 출력을 진행한다.
    // this.props.프롭스명.키값 의 형태로 사용한다.
    return (
      <div className="col-lg-10" id="lay_contents">
          <h2>게시판 내용보기</h2>
          <table className="table table-bordered">
            <tbody>
              <tr>
                  <td>번호</td>
                  <td>{this.props.bview.num}</td>
                  <td>작성자</td>
                  <td>{this.props.bview.id}</td>
              </tr>
              <tr>
                  <td>작성일</td>
                  <td>{this.props.bview.postdate}</td>
                  <td>조회수</td>
                  <td>{this.props.bview.visitcount}</td>
              </tr>
              <tr>
                  <td>제목</td>
                  <td colSpan="3">{this.props.bview.title}</td>
              </tr>
              <tr>
                  <td>내용</td>
                  <td colSpan="3" height="100">{
                  this.props.bview.content.split('\n').map(line=>{
                    return (
                      <span key={Math.random()}>{line}<br/></span>
                    );
                  })}</td>
              </tr>
              <tr>
                  <td colSpan="4" align="center">                     
                      <button type="button" onClick={(e)=>{
                        e.preventDefault();
                        this.props.myBoardView('list');
                      }}>
                          목록 보기
                      </button>
                  </td>
              </tr>  
            </tbody>                              
          </table>

      </div>
    );
  }
}


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode : 'list',
      num : 0
    };
  }
  render() {
    let content;
    if(this.state.mode==='list'){
      content = <ListContents myBoardView={(pnum,pmode)=>{
        console.log("num",pnum,"mode",pmode);
        // 받은 인자를 통해 state를 변경하고
        this.setState({mode:pmode, num:pnum});
        // 내용 보기를 위한 API를 호출한다.
       
      }}></ListContents>
    }else if(this.state.mode==='view'){
      // 변경된 state값 viewRow를 props로 전달한다.
      content = <ViewContents num={this.state.num} myBoardView={(pmode)=>{
        console.log("mode",pmode);
        this.setState({mode:pmode});
      }} ></ViewContents>
    }
    return (
      <div className="container">
        <Top></Top>
        <div className="row">
            <Left></Left>
            {/* 게시판 목록 or 내용보기 출력 */}
            {content}            
        </div>
        <Bottom></Bottom>
      </div>
       
    );
  }
}




export default App;
