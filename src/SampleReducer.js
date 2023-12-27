import React from 'react'
import {useReducer} from 'react'
import Button from "react-bootstrap/Button";


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

function SampleReducer() {
    const [count,dispatch] = useReducer(reducer,initialState)
  return (
    <div className='Sample'>
        <div>Count -{count}</div>
         <button onClick={() => dispatch('increment')} >Increment</button>
        <button onClick={()=> dispatch('decrement')}>Decrement</button>
        <button onClick={()=> dispatch('reset')}>Reset</button>
        {/* <Button onClick={()=> dispatch('increment')}>Increment 5</Button>
        <Button onClick={()=> dispatch('decrement')}>Decrement 5</Button> */}
    </div>
  )
}

export default SampleReducer