import React from "react";
import { TodoContext } from "../Todocontext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButtom } from "../CreateTodoButton";
function AppUI() {
  const { error, loading, searchedTodos, onComplete, onDelete } =
    React.useContext(TodoContext);
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

      <CreateTodoButtom />
    </React.Fragment>
  );
}
export { AppUI };
