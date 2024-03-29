import React from "react";
import { useTodos } from "./useTodos";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButtom } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";
import { TodoHeader } from "../TodoHeader";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { ChangeAlertWithStorageListener } from "../ChangeAlert";

function App() {
  const {
    error,
    loading,
    searchedTodos,
    onComplete,
    onDelete,
    openModal,
    totalTodos,
    completedTodos,
    searchValue,
    setsearchValue,
    addTodo,
    setOpenModal,
    sincronizeItem
  } = useTodos();
  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} 
        />

        <TodoSearch searchValue={searchValue} setsearchValue={setsearchValue}
         />
      </TodoHeader>

      <TodoList>
        {loading && <TodosLoading />}
        {error && <TodosError />}
        {!loading && !searchedTodos.length && searchValue.length > 0 && (
          <p className="not-found">El elemento: <strong>{searchValue}</strong> no lo has agregado todavia.</p>
        )}
        {!loading &&
          searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => onComplete(todo.text)}
              onDelete={() => onDelete(todo.text)}
            />
          ))}
        {!loading && !searchedTodos.length && searchValue.length === 0 && (
          <EmptyTodos />
        )}
      </TodoList>
      {openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}

      <CreateTodoButtom setOpenModal={setOpenModal} openModal={openModal} />
    <ChangeAlertWithStorageListener 
    sincronizeItem={sincronizeItem} />
    
    </React.Fragment>
  );
}

export default App;
