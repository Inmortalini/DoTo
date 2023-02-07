import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
 
  return (
    <div className="divItem">
      <li className="liItem">
        <span
          className={`openSpan ${props.completed ? "Icon-check--active" : ""}`}
          onClick={props.onComplete}
        >
          ✔
        </span>
        <p
          className={`pItem ${props.completed ? "pTachada" : ""}`}
          
        >
          {props.text}
        </p>
        <span className="closeSpan"onClick={props.onDelete}>X</span>
      </li>
    </div>
  );
}

export { TodoItem };
