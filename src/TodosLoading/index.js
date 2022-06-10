import React from "react";
import "./Loading.css";
function TodosLoading() {
  return (
    <div className="LoadingTodo-container">
      <span className="LoadingTodo-completeIcon"></span>
      <p>Cargando Tareas...</p>
      <span className="LoadingTodo-deleteIcon"></span>
    </div>
  );
}
export { TodosLoading };
