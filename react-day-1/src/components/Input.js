import React from "react";

const Input = React.forwardRef((_, ref) => {
  return (
    <div>
      <input ref={ref}></input>
      <button onClick={() => ref.current.focus()}> Focus</button>
    </div>
  );
});

export default Input;
