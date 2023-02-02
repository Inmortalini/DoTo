import React from "react";
import "./TodoList.css"
function TodoList(props){
    return(
        <div className="liList">
            <span className="spanList"></span>
            {props.children}
            <span></span>
        </div>
    )
}
export{TodoList}