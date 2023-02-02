// import logo from './logo.svg';
// import './App.css';
//Esto es como un React.createElement('div, {}....)
import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButtom } from "./CreateTodoButton";
const defaultTodos = [
  { text: "Cortar Cebolla", completed: true },
  { text: "Tomar el curso de react", completed: false },
  { text: "Llorar con la llorona", completed: false },
  { text: "Lalaland", completed: true },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;
  const [searchValue, setsearchValue] = React.useState("");
  let searchedTodos = [];
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }
  const onComplete = (text) => {
    const toDoIndex = todos.findIndex((todos) => todos.text === text);
    const newTodo = [...todos];
    newTodo[toDoIndex].completed = true;
    setTodos(newTodo);
  };
  const onDelete = (text) => {
    const toDoIndex = todos.findIndex((todos) => todos.text === text);
    const newTodo = [...todos];

    newTodo.splice(toDoIndex, 1);
    setTodos(newTodo);
  };
  return (
    <React.Fragment>
      <TodoCounter total={totalTodos} completed={completedTodos} />

      <TodoSearch searchValue={searchValue} setsearchValue={setsearchValue} />
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => onComplete(todo.text)}
            onDelete={()=> onDelete(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButtom />
    </React.Fragment>
  );
}

export default App;
