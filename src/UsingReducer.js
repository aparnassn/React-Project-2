import React from "react";
import { useReducer } from "react";
import Button from "react-bootstrap/Button";

const initialState = {
  firstCounter: 0,
  SecondCounter: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, SecondCounter: state.SecondCounter + action.value };
    case "decrement2":
      return { ...state, SecondCounter: state.SecondCounter - action.value };
    case "reset":
      return initialState
      default:
        return state
  }
};

function UsingReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      CounterOne:{count.firstCounter}<br></br>
      SecondOne :{count.SecondCounter}
      <div>
      <Button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </Button>
      <Button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </Button>
      </div>
      <Button onClick={() => dispatch({ type: "increment2", value: 1 })}>
        
        Increment 2
      </Button>
      <Button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
        Decrement 2
      </Button>
      <div>
      <Button onClick={() => dispatch({type:"reset"})}>reset </Button>
      </div>
    </div>
  );
}

export default UsingReducer;
