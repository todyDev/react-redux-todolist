import React, { useState } from "react";
import { connect } from "react-redux";
import Todo from "../components/Todo";
import { addToDo } from "../store";

function Home({ toDos, dispatchAddToDo }) {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    setText("");
    dispatchAddToDo(text);
  }
  return (
    <>
      <h1>할 일</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>추가</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <Todo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}

function mapStateToProps(state) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchAddToDo: (text) => dispatch(addToDo(text))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
