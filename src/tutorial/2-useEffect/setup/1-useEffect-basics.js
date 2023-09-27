import React, { useState, useEffect } from "react";
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("call useEffect");
    if (value >= 1) {
      document.title = `New Messages(${value})`;
    }
  }, [value]);

  useEffect(() => {
    console.log("hello world");
  }, []);
  console.log("render component");
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;

//TUTORIAL 2
/*
useEffect run after every re-render
   ;
by default runs after every re-render 
cleanup function
second parameter

      import React, { useState, useEffect } from "react"

const UseEffectBasics = () => {
  useEffect(() => {
    console.log("call useEffect");
  });
  console.log("render component");
  return <h2>useEffect Basics</h2>;
};

export default UseEffectBasics;

*why we see the render component twice->
is because of the React strict mode


*WE cannot call hooks conditionally e.g the code below
will note work
    if (value > 0) {
    useEffect(() => {
      console.log("call useEffect");
      document.title = `New Messages(${value})`;
    });
  }
  *The easiest way to use conditionals with hook is to use a
  call back function

* if you want use effect to only run on the initial render
useEffect(() => {
    console.log("call useEffect");
    if (value >= 1) {
      document.title = `New Messages(${value})`;
    }
  }, []);

  note-> the ending ,[] has not argument passed to it
  this makes useEffect run for initial render only

  *YOU CAN USE AS MANY USEEFFECT YOU WANT
  */
