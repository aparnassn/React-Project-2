import React, { Fragment, useRef } from "react";
import Button from "react-bootstrap/esm/Button";

function UseRefHook() {
  //Creating a ref object using useRef hook
  const focusPoint = useRef(null); //const Container = useRef(initialValue)
  function handleClick() {
    focusPoint.current.value = "1000";
    focusPoint.current.focus();
    focusPoint.current.style.color = "red";
  }

  return (
    <Fragment>
      <div>
        <Button onClick={handleClick}>Action</Button>
      </div>
      <label>Click on the action button to focus and populate the text.</label>
      <br />

      <textarea ref={focusPoint}></textarea>
    </Fragment>
  );
}

export default UseRefHook();
