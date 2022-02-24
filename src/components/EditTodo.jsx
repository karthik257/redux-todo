import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateTodoAction } from "../redux/action/actions";

function EditTodo() {
  const { name } = useParams();
  const [updatedValue, setUpdatedValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleUpdate = () => {
    dispatch(updateTodoAction({ name, updatedValue }));
    navigate("/");
  };

  return (
    <div>
      
      <input
        type="text"
        placeholder="Enter new value"
        value={updatedValue}
        onChange={(e) => setUpdatedValue(e.currentTarget.value)}
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default EditTodo;
