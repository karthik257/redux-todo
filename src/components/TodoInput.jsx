import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../redux/action/actions";
import {TodoList} from "./TodoList";
import Total from "./Total";

export const TodoInput = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const handleAddTodo = () => {
    dispatch(addTodoAction(value));
    setValue("");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Todo"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
      <button onClick={handleAddTodo}>Add</button>

      <TodoList />
      <Total />
    </div>
  );
};
