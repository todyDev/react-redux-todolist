import React from "react";

function Todo({ text }) {
  return (
    <li>
      {text} <button>Del</button>
    </li>
  );
}

export default Todo;
