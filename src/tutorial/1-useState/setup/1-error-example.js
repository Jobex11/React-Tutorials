import React from "react";

const ErrorExample = () => {
  let title = "random title";
  const handleClick = () => {
    title = "hello people";
    console.log(title);
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;

// PROJECT ONE[useState and useEffect] => most use react hooks
/*
useState and useEffect are the most common react hooks
*The idea to change the btn text ones we click on it
The problem is that we are not rerendering th component
to trigger the rerender we need to use [useState]
* This is why we need useState=> cause our component does not
rerender.

QUICK CHECKER
*React fragment
*/
