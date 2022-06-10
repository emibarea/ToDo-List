import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { CreateTodoButton } from "../TodoCreateButton/CreateTodoButton";
import { Modal } from "../Modal/index";
import { TodoForm } from "../TodoForm/index";
import { EmptyTodos } from "../EmptyTodos/index";
import { TodosError } from "../TodosError/index";
import { TodosLoading } from "../TodosLoading/index";
import "./App.css";
function AppUI() {
  const {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    completeTodo,
    deleteTodo,
    searchedTodos,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <>
      <div className="sections-container">
        <section className="left-section-container">
          <h1>To do list</h1>
          <TodoCounter />
          <TodoSearch />
          {error && <TodosError error={error} />}
          {!loading && !searchedTodos.length && <EmptyTodos />}
          <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal} />
        </section>
        <section className="rigth-section-container">
          <TodoList>
            {loading && <TodosLoading />}
            {searchedTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
          {!!openModal && (
            <Modal>
              <TodoForm />
            </Modal>
          )}
        </section>
      </div>
    </>
  );
}

export { AppUI };
