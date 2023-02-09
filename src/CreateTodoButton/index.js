import React from "react";
import "./CreateTodoButton.css"
function CreateTodoButtom(props) {
  const onClickButton=()=>{
    props.setOpenModal(!props.openModal)
  }
  return <button 
  className="CreateTodoButtom"
  onClick={onClickButton}> 
  +
  </button>;
}

export { CreateTodoButtom };
