import React from "react";
import "./TodoForm.css"
function TodoForm({addTodo,setOpenModal}) {
  const [newTodoValue, setNewTodoValue] = React.useState("");


  const onCancel = () => {
    setOpenModal(false)
  };
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
    setNewTodoValue('')
  };

  return (
    <form className='bigEnvoltura'onSubmit={onSubmit}>
      <label>Escribe alguna actividad pendiente</label>
      <textarea
        placeholder="Comprar un libro"
        value={newTodoValue}
        onChange={onChange}
        className='textArea'
      ></textarea>
      <div className="envoltura">
        <button type="button" className="cancelar"onClick={onCancel}>
          Cancelar
        </button>
        <button type="submit" className="añadir">Añadir</button>
      </div>
    </form>
  );
}
export { TodoForm };
