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
  } = useTodos();
  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter 
        totalTodos={totalTodos} 
        completedTodos={completedTodos} 
        />

        <TodoSearch 
        searchValue={searchValue} 
        setsearchValue={setsearchValue} 
        />
      </TodoHeader>

      <TodoList>
        {loading && <TodosLoading />}
        {error && <TodosError />}
        {!loading && !searchedTodos.length && <EmptyTodos />}
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
          <TodoForm 
          addTodo={addTodo}
          setOpenModal={setOpenModal}/>
        </Modal>
      )}

      <CreateTodoButtom setOpenModal={setOpenModal} openModal={openModal} />
    </React.Fragment>
  );
}

export default App;
