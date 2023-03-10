import React from "react";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setsearchValue }) {
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
