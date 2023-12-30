import React from "react"
import { useState } from "react"
import Button from "react-bootstrap/esm/Button"
import MyList from "./MyList"
import { useCallback } from "react"

export default function ParentComponent(){
    const [state,setState] = useState(false)
    const [dep] =useState(false)
    console.log("Parent component Rendered")


const handler = useCallback(
    (event) => {
        console.log("You clicked", event.currentTarget)
    },[dep]
)

const statehandler =()=>{
    setState(!state)
}

return(
    <div>
        <Button onClick={statehandler}>Change State of Parent Component</Button>
        <MyList handler={handler}></MyList>
    </div>
)
}