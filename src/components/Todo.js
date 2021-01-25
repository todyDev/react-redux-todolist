import React from "react";
import { connect } from "react-redux";
import { deleteToDo } from "../store";

function Todo({ text, onBtnClick }) {
  return (
    <li>
      {text} <button onClick={onBtnClick}>Del</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBtnClick: () => dispatch(deleteToDo(ownProps.id))
  };
}

export default connect(null, mapDispatchToProps)(Todo);
