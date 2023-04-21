import React, { useState, useMemo } from "react";
function Counter() {
  const [counterone, setCounterOne] = useState(0);
  const [countertwo, setCounterTwo] = useState(0);
  const incrementOne = () => {
    setCounterOne(counterone + 1);
  };
  const incrementTwo = () => {
    setCounterTwo(countertwo + 1);
  };
  // const isEven = () => {
  //   let i = 0;
  //   while (i < 200000) i++;
  //   return counterone % 2 === 0;
  // }; // by doing this both buttons get affected a delay because
  // this will re render whole component and so to avoid we can add this function in useMemo and we can assign this it to variable .

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 200000) i++;
    return counterone % 2 === 0;
  }, [counterone]);

  return (
    <div>
      <button onClick={incrementOne}>Count one - {counterone}</button>         
      <button onClick={incrementTwo}>Count two - {countertwo}</button>{" "}
      <span>{isEven ? "Even" : "odd"}</span>
    </div>
  );
}
export default Counter;
