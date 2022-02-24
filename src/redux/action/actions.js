import {
  ADD_TODOS,
  REMOVE_TODOS,
  TOGGLE_TODOS,
  UPDATE_TODOS,
} from "./actionTypes";

import { v4 } from "uuid";
export const addTodoAction = (value) => {
  return {
    type: ADD_TODOS,
    payload: {
      id: v4(),
      status: false,
      value: value,
    },
  };
};

export const removeTodoAction = (id) => {
  return {
    type: REMOVE_TODOS,
    payload: id,
  };
};

export const updateTodoAction = (payload) => {
  return {
    type: UPDATE_TODOS,
    payload,
  };
};

export const toggleTodoAction = (id, toggle) => {
  return {
    type: TOGGLE_TODOS,
    payload: {
      id: id,
      toggle: toggle,
    },
  };
};
