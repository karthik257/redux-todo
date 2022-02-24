import {
  ADD_TODOS,
  REMOVE_TODOS,
  TOGGLE_TODOS,
  UPDATE_TODOS,
} from "../action/actionTypes";
import { v4 } from "uuid";
const initialStateTodo = {
  todos: [
    {
      id: v4(),
      status: false,
      value: "Buy Bread",
    },
  ],
};

export const todoReducers = (state = initialStateTodo, action) => {
  switch (action.type) {
    case ADD_TODOS:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case REMOVE_TODOS:
      return {
        ...state,
        todos: state.todos.filter((e) => e.id !== action.payload),
      };
    case UPDATE_TODOS:
      const index1 = state.todos.findIndex((e) => {
        return e.id === action.payload.name;
      });
      state.todos[index1].value = action.payload.updatedValue;
      return {
        ...state,
        todos: [...state.todos],
      };
    case TOGGLE_TODOS:
      console.log(action.payload);
      const toggle = !action.payload.toggle
      const index2 = state.todos.findIndex((e) => {
        return e.id === action.payload.id;
      });
      state.todos[index2].status = toggle;

      return {
        ...state,
        todos: [...state.todos],
      };
    default:
      return state;
  }
};
