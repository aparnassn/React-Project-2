import React, { useRef, useEffect } from 'react'

function FocusInput() {
    const inputRef = useRef(null)

    useEffect(() =>{
        //Focus the input element
        inputRef.current.focus()
    },[])
    
  return (
    <div>
        <input type='text' ref={inputRef}></input>
    </div>
  )
}

export default FocusInput