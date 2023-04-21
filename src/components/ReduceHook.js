import React, { useReducer } from "react";

const intialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 5;
    case "reset":
      return 0;
    default:
      return state;
  }
};

function ReduceHook() {
  const [count, dispatch] = useReducer(reducer, intialState);

  return (
    <div>
      Count - {count}
      <button
        onClick={() => {
          dispatch("increment");
        }}
      >
        Increment By 5
      </button>
      <button
        onClick={() => {
          dispatch("reset");
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default ReduceHook;
