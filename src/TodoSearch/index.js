import React from "react";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setsearchValue,loading }) {
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
        disabled={loading}
      />
    </React.Fragment>
  );
}

export { TodoSearch };
