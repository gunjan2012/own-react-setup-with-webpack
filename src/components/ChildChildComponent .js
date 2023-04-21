import React from "react";
import { UserContext } from "../App";

function ChildChildComponent() {
  return (
    <div>
      <UserContext.Consumer>
        {(name) => {
          return <>My name is {name}</>;
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ChildChildComponent;
