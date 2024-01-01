import React from "react";
import { useState, useMemo } from "react";
import UserCard from "./UserCard";
import Button from "react-bootstrap/esm/Button";

const UserCardHead = () => {
  const [counter, setCounter] = useState(0);

  const memoisedCard = useMemo(() => {
    return <UserCard />;
  }, []);
  return (
    <div>
      <Button onClick={() => setCounter(counter + 1)}>
        Click here {memoisedCard}
      </Button>
    </div>
  );
};
export default UserCardHead;
