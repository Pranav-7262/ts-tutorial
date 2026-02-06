import React, { useState } from "react";

const Counter = () => {
  const [count, setcount] = useState<number>(0);
  const handleClick = () => {
    setcount((c) => c + 1);
  };
  return (
    <div>
      <p>Cups ordered : {count}</p>
      <button onClick={handleClick}>Order more cups</button>
    </div>
  );
};

export default Counter;
