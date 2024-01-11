import React, { useState,useMemo } from 'react'

function UseMemoHook() {

    const [number,setNumber]=useState("")
    //const squaredNum = squareNum(number)
    //Using useMemo
    const squaredNum =useMemo(()=>{
        return squareNum(number)
    },[number])

    const [counter,setCounter] =useState(0)

    function counterHander(){
        setCounter(counter + 1)
    }
  return (
    <div>
        <h3>Welcome to our Website!!!</h3>
        <input type='number' placeholder='Enter a number' value={number} onChange={(e)=>setNumber(e.target.value)}></input>
        <div>Output:{squaredNum}</div>
        <button onClick={counterHander}>Counter++</button>
        <div>Counter:{counter}</div>
    </div>
   
  )
}
//function to square the value 
function squareNum(number){
    console.log("Squaring will be done!")
    return Math.pow(number,2)
}

export default UseMemoHook