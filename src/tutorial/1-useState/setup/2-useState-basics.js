import React, { useState } from "react";
//use state is a function
const UseStateBasics = () => {
  const [text, setText] = useState("random title");
  const handleClick = () => {
    if (text === "random title") {
      setText("hello world");
    } else {
      setText("random title");
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;

//USESTATE
/*
* useState is a react function
e.g console.log(useState)
to evoke useState -> console.log(useState());

  console.log(useState("hello world"));
  const value = useState(1)[0]; => handles initial text
  const handler = useState(1)[1]; => handles second text

  const [text, setText] -> here,if you have [text] use
  set___ (the var with its first letter on uppercase)
  e.g setText
  * we set new value using setText.

  * laws to guide you in hooks
  use->
  component name must be uppercase
  must be in function/component body -> must be present
  inside the function you are using it for
  cannot call conditionally-> cannot call it in condition
  statement
*/
