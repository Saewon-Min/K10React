import React,{Component} from "react";

/*
새로운 게시물 작성을 위한 작성폼 컴포넌트 생성
*/

class CreateForm extends Component{
    render() {
        return (
             <article>
                 <h2>Create</h2>
                <form action="/create_process" method="post" onSubmit={function(e){
                    e.preventDefault();
                    this.props.onSubmitValue(
                        e.target.title.value,
                        e.target.desc.value
                    );
                }.bind(this)}>
                <p><input type="text" name="title" placeholder="제목입력"/></p>
                <p><textarea name="desc" placeholder="내용입력"></textarea></p>
                <p><input type="submit" value="전송"/></p>
                </form>
                
             </article>
        );
    }
}

export default CreateForm;

