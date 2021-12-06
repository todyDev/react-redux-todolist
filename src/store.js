import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

// slice (action + reducer)
const toDoSlice = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    addToDo: (state, action) => {
      state.unshift({ text: action.payload, id: Date.now() });
    },
    deleteToDo: (state, action) => {
      return state.filter((toDo) => toDo.id !== action.payload);
    }
  }
});

// store
const store = createStore(toDoSlice.reducer);

// export action
export const { addToDo, deleteToDo } = toDoSlice.actions;

export default store;
