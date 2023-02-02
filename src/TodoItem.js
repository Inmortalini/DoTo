import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  const onComplete=()=>{
    alert('Ya completaste el To Do de '+ props.text)
  };
  const onDelete=()=>{
    alert('borraste '+ props.text)
  }
  return (
    <div className="divItem">
      <li className="liItem">
        <span className={`openSpan ${props.completed ? "Icon-check--active" : ""}`}
        onClick={onComplete}>
          ✔
        </span>
        <p className={`pItem ${props.completed?"pTachada":""}`}
        onClick={onDelete}>
          {props.text}
        </p>
        <span className="closeSpan">X</span>
      </li>
    </div>
  );
}

export { TodoItem };
