import React, {Component} from 'react';
class Navi extends Component{
  
  render(){
    let lists = [];
    let data = this.props.data;
    let i =0;
    /*
    state에서 정의한 contents를 props로 받아서 배열 크기만큼 반복하여
    li태그를 출력한다. 이때 warning이 뜨게 되는데, 중복되지 않는 key prop을
    지정해야 한다는 의미이다. 리액트의 요청사항이므로 li태그에 key 속성을
    추가하여 중복되지 않는 값을 가지도록 처리하면 된다.
    */
    while(i<data.length){
      lists.push(<li key={data[i].id}><a href={ "/content/" + data[i].id }>{data[i].title}</a></li>);
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