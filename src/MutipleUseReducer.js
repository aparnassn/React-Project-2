import { useReducer } from "react"
import React  from 'react'

const initialState = 0
const reducer = (state,action) => {
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default :
        return state
    }
    
}

function MutipleUseReducer() {
    const [count,dispatch] = useReducer(reducer,initialState)
    const [counttwo,dispatchtwo] = useReducer(reducer, initialState)//useReducer parameters are same like before bcz of same behaviour
    
  return (
    <div>
        <div>Count one - {count}</div>
        <div>
        <button onClick={()=> dispatch('increment')}>Increment</button>
        <button onClick={()=> dispatch('decrement')}>Decrement</button>
        <button onClick={()=> dispatch('reset')}>Reset</button>
        </div>
        <div>Count Two - {counttwo}</div>
        <div>
        <button onClick={()=> dispatchtwo('increment')}>Increment</button>
        <button onClick={()=> dispatchtwo('decrement')}>Decrement</button>
        <button onClick={()=> dispatchtwo('reset')}>Reset</button>
        </div>
    </div>
  )
}

export default MutipleUseReducer