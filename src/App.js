
import './App.css';
import ComponentC from './ComponentC'
import React from 'react'
import UseReducerOne from './UseReducerOne';
import CompoA from './CompoA';
import CompoB from './CompoB';
import CompoC from './CompoC';
import { useReducer } from 'react';
import { useContext } from 'react';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

export const CountContext =React.createContext();

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

function App() {
  const [count,dispatch] =useReducer(reducer,initialState)
  return (
    
    <div className='App'>
      <CountContext.Provider value={{countState :count ,countDispatch : dispatch}}>

      </CountContext.Provider>
      <div>Count-{count}</div>
        <button onClick={() => dispatch('reset')}>Reset</button>
        <button onClick={() => dispatch('increment')}>Increment</button>
        <button onClick={() => dispatch('decrement')}>Decrement</button>
      <CompoA/>
      <CompoB/>
      <CompoC/>
      {/* <UserContext.Provider value={'Youtube'}>
        <ChannelContext.Provider value={'Studio'}>
        <ComponentC/>
        </ChannelContext.Provider>
        
      </UserContext.Provider> */}
      {/* <CounterOne/> */}
      {/* <UseReducerOne/> */}
      {/* <MutipleUseReducer/> */}
    </div>
  );
}

export default App;
