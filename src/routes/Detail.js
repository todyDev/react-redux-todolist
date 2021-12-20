import React from "react";
import { connect } from "react-redux";
import { deleteToDo } from "../store";

function Detail({ toDo, onBtnClick }) {
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Create at : {toDo?.id}</h5>
      <button onClick={onBtnClick}>del</button>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  const {
    match: {
      params: { id }
    }
  } = ownProps;
  console.log(ownProps);
  return { toDo: state.find((toDo) => toDo.id === parseInt(id)) };
}

function mapDispatchToProps(dispatch, ownProps) {
  const {
    match: {
      params: { id }
    }
  } = ownProps;
  return {
    onBtnClick: () => dispatch(deleteToDo(parseInt(id)))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
