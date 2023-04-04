import React from "react";
function useLocalStorge(itemName, inicialValue) {
  const [sincronizedItem, setSincronizedItem] = React.useState(true);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(inicialValue);
  const [errors, setError] = React.useState(false);

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
        setSincronizedItem(true);
      } catch (error) {
        console.log(errors);
        setError(error);
      }
    }, 2000);
  }, [sincronizedItem]);

  const saveItem = (newItem) => {
    try {
      const stringifiedTodos = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedTodos);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };
  const sincronizeItem = () => {
    setLoading(true);
    setSincronizedItem(false);
  };
 return { item, saveItem, loading, sincronizeItem };
}
export { useLocalStorge };
