import React, { useState} from "react";
import Button from "react-bootstrap/esm/Button";
import useDocumentTitle from "../Hooks/useDocumentTitle";

function DocTitleOne() {
  const [count, setCount] = useState(0);

 useDocumentTitle(count)
  return (
    <div>
      <Button onClick={() => setCount(count + 1)}>Count-{count}</Button>
    </div>
  );
}

export default DocTitleOne;
