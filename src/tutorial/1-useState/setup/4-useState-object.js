import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    message: "random message",
  });

  const changeMessage = () => {
    setPerson({ ...person, message: "hello world " });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;

//USESTATE OBJECT
/*
Incase when you want to test e.g this will show it in the console
const UseStateObject = () => {
  const [person, setPerson] = userState({
    name: "peter",
    age: 24,
    messgae: "random message",
  });
  console.log(person);
  return <h2>useState object example</h2>;

  * Notice here that it erased every object of the 
  component
   const changeMessage = () => {
    setPerson("hello world");
  };

  * Notice here that ones button was click is only
  hello world that was shown others disappeared
  e.g
  const changeMessage = () => {
    setPerson({ messgae: "hello world " });
  };

  * This is right way to change only message
  e.g
  const changeMessage = () => {
    setPerson({ ...person, messgae: "hello world " });
  };

*/
