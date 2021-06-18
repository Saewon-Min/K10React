import React, {Component} from 'react';
class Navi extends Component{
  
  render(){
    let lists = [];
    let data = this.props.data;
    let i =0;
    /*
    Navi에서 각 항목을 클릭했을때 내용을 변경하게 하기위해
    data-id라는 속성을 추가한다. 해당 속성은 이벤트를 통해 전달되며
    dataset이라는 항목에서 확인할 수 있다.
    이벤트객체.target.dataset.id 와 같이 값을 얻어올 수 있다.
    */
    while(i<data.length){
      lists.push(<li key={data[i].id}>
                    <a href={ "/content/" + data[i].id }
                      data-id={data[i].id}
                      onClick={function(event){
                        //console.log(event);
                        //debugger; // 실행을 잠시 멈추고 디버깅모드로 진입하게 된다.
                        event.preventDefault();
                        // 부모가 props로 전달해준 함수를 호출한다.
                        // data-id의 값을 얻어와서 함수의 인자로 전달한다.
                        this.props.onChangePage(event.target.dataset.id);
                      }.bind(this)}
                    >{data[i].title}
                    </a>
                  </li>);
      i++;
    }


    return(
      
        <nav>
          <ul> 
              {lists}
          </ul>
        </nav>
      );
    }
  }
export default Navi;