import React,{useReducer} from "react";
import CompoA from "./CompoA";
import CompoB from "./CompoB";
import CompoC from "./CompoC";


export const CountContext = React.createContext()

const initialState = 0;
const reducer =(state,action)=>{
    switch (action){
        case "increment":
            return state + 1
        case "decrement":
            return state - 1
        case "reset":
            return initialState
        default:
            return state
    }

}


function Head() {
    const [count,dispatch] = useReducer(reducer,initialState)

  return (
    <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
    <div>
        Count -{count}
      <CompoA />
      <CompoB />
      <CompoC />
    </div>
    </CountContext.Provider>
  );
}

export default Head;
