import React from "react";
import { useState, useEffect } from "react";

const UserCard = () => {
  useEffect(() => {
    console.log("UserCard rendered");
  });
  return (
    <div>
      <p>Hello,I am Stephen</p>
    </div>
  );
};
export default UserCard;
