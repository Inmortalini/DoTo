import React from "react";
import { TodoContext } from "../Todocontext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButtom } from "../CreateTodoButton";
import { Modal } from "../Modal";
function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    onComplete,
    onDelete,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {loading && <p>Estamos cargando</p>}
        {error && <p>Desesperate hubo un error</p>}
        {!loading && !searchedTodos.length && <p>Crea tu primer To Do</p>}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => onComplete(todo.text)}
            onDelete={() => onDelete(todo.text)}
          />
        ))}
      </TodoList>
      {openModal && (
        <Modal>
          <p>{searchedTodos[0]?.text}</p>
        </Modal>
      )}

      <CreateTodoButtom 
      setOpenModal={setOpenModal}
      openModal={openModal}/>
    </React.Fragment>
  );
}
export { AppUI };
