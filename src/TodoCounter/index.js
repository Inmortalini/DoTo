
import React from "react";
import { TodoContext } from "../Todocontext";
import './TodoCounter.css'
function TodoCounter() {
  const {totalTodos,completedTodos}=React.useContext(
    TodoContext
  )
  return <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} tus To do</h2>;
}
export { TodoCounter };
