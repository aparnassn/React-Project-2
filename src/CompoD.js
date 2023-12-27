import React from "react";
import { useContext } from "react";
import { CountContext } from "./Head";

function CompoD() {
  const c = useContext(CountContext);
  return (
    <div>
      Component D- {c.countState}
      <button onClick={() => c.countDispatch("increment")}>Increment</button>
      <button onClick={() => c.countDispatch("decrement")}>Decrement</button>
      <button onClick={() => c.countDispatch("reset")}>Reset</button>
    </div>
  );
}

export default CompoD;
