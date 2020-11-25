import React, { useReducer } from "react";
import "./index.css";
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function Index() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="Main">
      <div className="Text">Current Count <br/> = {count}</div>
      <div className="ViewButton">
        <div className="ViewButton2">
          <button className="Button" onClick={() => dispatch("increment")}>
            Count Up
          </button>
        </div>
        <div className="ViewButton1">
          <button className="Button" onClick={() => dispatch("decrement")}>
            Count Down
          </button>
        </div>
        <div className="ViewButton1">
          <button className="Button" onClick={() => dispatch("reset")}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Index;