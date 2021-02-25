import React from "react";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import "./styles.css";

export default function TodoApp() {
  return (
    <div
      className="todo-app"
      style={{
        backgroundImage: `url(https://www.wallpapertip.com/wmimgs/37-374958_light-brown-abstract-wall-texture-hd-paper-backgrounds.jpg)`
      }}
    >
      <Header />
      <AddTodo />
      <TodoList />
      <VisibilityFilters />
    </div>
  );
}
