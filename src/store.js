import { createStore } from "redux";
import { createAction } from "@reduxjs/toolkit";

// action
const addToDo = createAction("ADD_TODO");
const deleteToDo = createAction("DEL_TODO");

// reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.type:
      const newToDo = { text: action.payload, id: Date.now() };
      return [newToDo, ...state];
    case deleteToDo.type:
      const cleanToDo = state.filter((toDo) => toDo.id !== action.payload);
      return cleanToDo;
    default:
      return state;
  }
};

// store
const store = createStore(reducer);

// action Creator
export const actionCreators = {
  addToDo,
  deleteToDo
};

export default store;
