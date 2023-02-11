import React from "react";
import "./TodoItem.css";
import { TiInputChecked,TiTrash } from "react-icons/ti";

function TodoItem(props) {
 
  return (
    <div className="divItem">
      <li className="liItem">
        <span
          className={`openSpan ${props.completed ? "Icon-check--active" : ""}`}
          onClick={props.onComplete}
        >
          <TiInputChecked/>
        </span>
        <p
          className={`pItem ${props.completed ? "pTachada" : ""}`}
          
        >
          {props.text}
        </p>
        <span className="closeSpan"onClick={props.onDelete}>
          <TiTrash/>
        </span>
      </li>
    </div>
  );
}

export { TodoItem };
