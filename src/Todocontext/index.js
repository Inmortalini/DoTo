import React from "react";
import { useLocalStorge } from "./useLocalStorage";
const TodoContext = React.createContext();
function TodoProvider(props) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorge("TODOS_V1", []);

  const [searchValue, setsearchValue] = React.useState("");
  const [openModal,setOpenModal]=React.useState(false)
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

  const onComplete = (text) => {
    const toDoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodo = [...todos];
    newTodo[toDoIndex].completed = !newTodo[toDoIndex].completed;
    saveTodos(newTodo);
  };
  const onDelete = (text) => {
    const toDoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodo = [...todos];
    newTodo.splice(toDoIndex, 1);
    saveTodos(newTodo);
  };
  return (
    <TodoContext.Provider value={{
        error,
        loading,
        totalTodos,
        completedTodos,
        searchValue,
        setsearchValue,
        searchedTodos,
        onComplete,
        onDelete,
        openModal,
        setOpenModal
    }}>{props.children}</TodoContext.Provider>
  );
}

<TodoContext.Consumer></TodoContext.Consumer>;
export{TodoContext, TodoProvider}