import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import EditTodo from "./components/EditTodo";
import Home from "./components/Home";
import TodoPage from "./components/TodoPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="todo/:id" element={<TodoPage />} />
        <Route path="todo/:name/edit" element={<EditTodo />} />
      </Routes>
    </div>
  );
}

export default App;
