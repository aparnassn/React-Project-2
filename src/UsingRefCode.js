import React, { useRef, useEffect } from "react";
import Button from "react-bootstrap/esm/Button";

const UsingRefCode = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref) {
      ref.current.click();
    }
  });
  return (
    <div>
      <Button onClick={() => alert("You Clicked")} ref={ref}>
        Click here
      </Button>
    </div>
  );
};
export default UsingRefCode;
