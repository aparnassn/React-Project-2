import { useEffect, useState,useRef } from "react"
import React  from 'react'
import Button from "react-bootstrap/esm/Button"

function HookTimer() {
    const [timer,setTimer]= useState(0)
    const intervalRef =useRef()

    useEffect(() =>{
        intervalRef.current =setInterval(()=>{
            setTimer(prevTimer => prevTimer + 1)
        },1000)

        return()=> {
            clearInterval(intervalRef.current)
        }
    },[])
  return (
    <div>HookTimer -{timer}
    <Button onClick={()=>clearInterval(intervalRef.current)}>Clear Hook timer</Button>
    
    </div>
  )
}

export default HookTimer