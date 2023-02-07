import React from "react";
import { AppUI } from "./AppUI";

function useLocalStorge(itemName, inicialValue) {
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(inicialValue);
  const [error, setError] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(inicialValue));
          parsedItem = inicialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }, 2000);
  });

  const saveItem = (newItem) => {
    try {
      const stringifiedTodos = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedTodos);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };
  return { item, saveItem, loading };
}
function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorge("TODOS_V1", []);

  const [searchValue, setsearchValue] = React.useState("");
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
  // console.log('Render (antes del use efect')
  // React.useEffect(()=>{
  //   console.log("Use Effect")
  // },[totalTodos])
  // console.log('Render (luego del use efect')

  return (
    <AppUI
      error={error}
      loading={loading}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setsearchValue={setsearchValue}
      searchedTodos={searchedTodos}
      onComplete={onComplete}
      onDelete={onDelete}
    />
  );
}

export default App;
