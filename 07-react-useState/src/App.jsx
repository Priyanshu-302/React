import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  const increment = () => {
    setNum(num + 1);
  };

  const decrement = () => {
    setNum(num - 1);
  };

  const setDefault = () => {
    setNum(0);
  };

  return (
    <>
      <div>
        <h1>{num}</h1>
        <button onClick={increment}>Increase</button>
        <button onClick={decrement}>Decrease</button>
        <button onClick={setDefault}>Set to default</button>
      </div>
    </>
  );
};

export default App;
