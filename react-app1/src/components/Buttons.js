import React,{Component} from "react";

// 생성, 수정, 삭제 버튼 컴포넌트 정의
class Buttons extends Component{
    render() {
        return (
            // react에서 style을 지정할때는 중괄호를 중첩해서 적용한다.
            /*
            버튼 클릭시 이벤트 처리를 위해 onClick 핸들러를 추가하고
            함수의 인자로는 event객체를 받아온다.
            화면의 깜빡임을 방지하기 위해 prevenetDefault()를 호출하고,
            props로 전달된 onChangeMode()를 통해 각 버튼의 mode값을 전달한다.
            */
            <ul>
                <li style={{listStyleType:"none"}}>
                    <input type="button" value="create" onClick={function(e){
                        e.preventDefault();
                        this.props.onChangeMode('create');
                    }.bind(this)}/>
                    <input type="button" value="update" onClick={function(e){
                        e.preventDefault();
                        this.props.onChangeMode('update');
                    }.bind(this)}/>
                    <input type="button" value="delete" onClick={function(e){
                        e.preventDefault();
                        this.props.onChangeMode('delete');
                    }.bind(this)}/>
                </li>
            </ul>
        );
    }
}

export default Buttons;