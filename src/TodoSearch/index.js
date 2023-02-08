import React from "react";
import { TodoContext } from "../Todocontext";
import "./TodoSearch.css";

function TodoSearch() {
  const { searchValue, setsearchValue }=React.useContext(TodoContext)
  const onSearch = (event) => {
    console.log(event.target.value);
    setsearchValue(event.target.value);
  };
  return (
    <React.Fragment>
      <label className="labelSearch">Buscador de actividades</label>
      <input
        placeholder="Aqui podes buscar tus actividades"
        className="TodoSearch"
        value={searchValue}
        onChange={onSearch}
      />
      
    </React.Fragment>
  );
}

export { TodoSearch };
