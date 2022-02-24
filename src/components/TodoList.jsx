import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeTodoAction, toggleTodoAction } from "../redux/action/actions";

function TodoList() {
  const [toggle, setToggle] = useState(false);
  const todoState = useSelector((state) => state.todoReducers.todos);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <h2>All Todo</h2>
      {todoState.map((e) => {
        return (
          <p key={e.id}>
            <Link to={`/todo/:${e.value}`}>Title = {e.value} &nbsp;</Link>
            <span>Status = {e.status?"true":"false"}</span>
            <span>
              <button
                onClick={() => {
                  dispatch(removeTodoAction(e.id));
                }}
              >
                Remove
              </button>
            </span>
            <span>
              <button
                onClick={() => {
                  navigate(`/todo/${e.id}/edit`);
                }}
              >
                Edit
              </button>
            </span>
            <span>
              <button
                onClick={() => {
                  setToggle(!toggle);
                  dispatch(toggleTodoAction(e.id, toggle));
                }}
              >
                Toggle Status
              </button>
            </span>
          </p>
        );
      })}
    </div>
  );
}

export { TodoList };
// /todo/:id page
// /todo/:id/edit
