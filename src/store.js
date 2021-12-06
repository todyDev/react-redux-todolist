import { createStore } from "redux";

const ADD_TODO = "ADD_TODO";
const DEL_TODO = "DEL_TODO";

// action router
const addToDo = (text) => {
  return { type: ADD_TODO, id: Date.now(), text };
};

const deleteToDo = (id) => {
  return { type: DEL_TODO, id };
};

// reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const newToDo = { text: action.text, id: action.id };
      return [newToDo, ...state];
    case DEL_TODO:
      const cleanToDo = state.filter((toDo) => toDo.id !== action.id);
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
