import React from "react";
import { useSelector } from "react-redux";

function Total() {
  const todoState = useSelector((state) => state.todoReducers.todos);

  return (
    <div>
      <h2>Total number of non completed todos</h2>
      {todoState.map((e) => {
        if (!e.status) {
          return <p key={e.id}>{e.value}</p>;
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default Total;
