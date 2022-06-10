import React from "react";
function useLocalStorage(itemName, initialValue) {
  const [error, setErr] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let ParsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          ParsedItem = initialValue;
        } else {
          ParsedItem = JSON.parse(localStorageItem);
        }
        setItem(ParsedItem);
        setLoading(false);
      } catch (err) {
        setErr(err);
      }
    }, 1000);
  });

  const saveItem = (newTodos) => {
    try {
      const stringifiedTodos = JSON.stringify(newTodos);
      localStorage.setItem(itemName, stringifiedTodos);
      setItem(newTodos);
    } catch (err) {
      setErr(err);
    }
  };
  return { item, saveItem, loading, error };
}
export { useLocalStorage };
