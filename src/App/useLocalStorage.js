import React from "react";
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
        setError(error);
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
export { useLocalStorge };
