import React from "react";
import { SketchPicker } from "react-color";
import Button from "react-bootstrap/esm/Button";
import { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("blue");
  const [hidden, setHidden] = useState(false);
  const pickerStyle = {
    default: {
      picker: {
        position: "absolute",
        bottom: "30px",
        left: "100px",
      },
    },
  };

  return (
    <div style={{ background: color }}>
      <div className="container">
        <div className="d-flex justify-content-center align-content-center" style={{height:"100vh"}}>
        {hidden && (
          <SketchPicker
            styles={pickerStyle}
            color={color}
            onChange={(updatedColor) => setColor(updatedColor.hex)}
          ></SketchPicker>
        )}
        <Button onClick={() => setHidden(!hidden)}>
          {hidden ? "Close Color Picker" : "Open Color Picker"}
        </Button>
      </div>
    </div>
    </div>
  );
}

export default ColorPicker;
