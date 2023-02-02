import React from "react";
import "./CreateTodoButton.css"
function CreateTodoButtom(props) {
  const onClickButton=()=>{
    alert("Esto abrira una consola para agregar actividades")
  }
  return <button 
  className="CreateTodoButtom"
  onClick={onClickButton}> 
  +
  </button>;
}

export { CreateTodoButtom };
