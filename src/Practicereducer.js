import React from 'react'
import useReducer from 'react'
import Button from "react-bootstrap/Button" 


const initialState = {
    firstCounter : 0
}
const reducer = (state,action) =>{
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state -1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function Practicereducer() {

   const [count,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
        <div>Count-one -{count}</div>
        <Button onClick={() => dispatch('increment')} >Increment</Button>
        <Button onClick={()=> dispatch('decrement')}>Decrement</Button>
        <Button onClick={()=> dispatch('reset')}>Reset</Button>
        <Button onClick={()=> dispatch('increment')}>Increment 5</Button>
        <Button onClick={()=> dispatch('decrement')}>Decrement 5</Button>
    </div>
  )
}

export default Practicereducer