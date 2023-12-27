import React from "react";
import CompoB from "react";
import { CountContext } from "./App";
import { useContext } from "react";

function CompoA() {
    const cc = useContext(CountContext)
  return (
    <div>
        Component A
        <CompoB/>
      <button onClick={() => cc.countDispatch('increment')}>Increment</button>
      <button onClick={() => cc.countDispatch('decrement')}>Decrement</button>
      <button onClick={() => cc.countDispatch('reset')}>Reset</button>
    </div>
  );
}

export default CompoA;
