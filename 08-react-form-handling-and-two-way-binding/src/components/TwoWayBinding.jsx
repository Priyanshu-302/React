import React, { useState } from "react";

// Two Way Binding Example
const TwoWayBinding = () => {
  const [title, setTitle] = useState("");

  const formHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted by ", title);

    setTitle(""); // --> Part 1 - When the code is changed then the UI got updated
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          formHandler(e);
        }}
      >
        <input
          type="text"
          placeholder="Enter your name"
          value={title}
          onChange={(e) => setTitle(e.target.value)} // --> Part 2 - When UI is changed then the code changes.
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default TwoWayBinding;
