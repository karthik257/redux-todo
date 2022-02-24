import React from "react";
import { useParams } from "react-router-dom";

function TodoPage() {
  const { id } = useParams();
  return <div>
   <h2>You have selected {id}</h2>
  </div>;
}

export default TodoPage;
