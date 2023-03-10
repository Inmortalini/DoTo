import React from "react";
import { useLocalStorge } from "./useLocalStorage";

function useTodos() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorge("TODOS_V1", []);

  const [searchValue, setsearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);
  const [todoDelete, setTodoDelete] = React.useState(null);
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (searchValue.length < 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }
  const addTodo = (text) => {
    const newTodo = [...todos];
    newTodo.push({
      completed: false,
      text,
    });
    saveTodos(newTodo);
  };
  const onComplete = (text) => {
    const toDoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodo = [...todos];
    newTodo[toDoIndex].completed = !newTodo[toDoIndex].completed;
    saveTodos(newTodo);
  };
  const onDelete = (text) => {
    const toDoIndex = todos.findIndex((todo) => todo.text === text);
    const deletedTodo = todos[toDoIndex];
    const newTodo = [...todos];
    setTodoDelete(newTodo[toDoIndex]);
    newTodo.splice(toDoIndex, 1);
    console.log("Elemento borrado", deletedTodo);
    saveTodos(newTodo);
  };
  const confirmDelete = () => {
    if (todoDelete) {
      const newTodo = [...todos];
      const toDoIndex = newTodo.findIndex(
        (todo) => todo.text === todoDelete.text
      );
      newTodo.splice(toDoIndex, 1);
      saveTodos(newTodo);
      setTodoDelete(null);
    }
  };
  return {
    error,
    loading,
    totalTodos,
    completedTodos,
    searchValue,
    setsearchValue,
    searchedTodos,
    addTodo,
    onComplete,
    onDelete,
    openModal,
    setOpenModal,
    todoDelete,
    setTodoDelete,
    confirmDelete,
  };
}
export {useTodos };
