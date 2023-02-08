import React from "react";
import { TodoContext } from "../Todocontext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButtom } from "../CreateTodoButton";
function AppUI() {
  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />
      <TodoContext.Consumer>
        {({
        error, 
        loading, 
        searchedTodos,
        onComplete, 
        onDelete }) => (
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
        )}
      </TodoContext.Consumer>
      <CreateTodoButtom />
    </React.Fragment>
  );
}
export { AppUI };
