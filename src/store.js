import { createStore } from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";

// action
const addToDo = createAction("ADD_TODO");
const deleteToDo = createAction("DEL_TODO");

// reducer
const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.unshift({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) => {
    return state.filter((toDo) => toDo.id !== action.payload);
  }
});

// store
const store = createStore(reducer);

// action Creator
export const actionCreators = {
  addToDo,
  deleteToDo
};

export default store;
