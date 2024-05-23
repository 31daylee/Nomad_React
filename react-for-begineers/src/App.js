import { func } from "prop-types";
import { useState, useEffect } from "react";

// opt1
function Hello() {
  function destroyedFn() {
    console.log("destroyed");
  }
  function effectFn() {
    console.log("created");
    return destroyedFn;
  }
  useEffect(effectFn, []);
  return <h1>Hello</h1>;
}

// opt2
useEffect(() => {
  console.log("hi ");
  return () => console.log("bye");
}, []);
useEffect(function () {
  console.log("hi");
  return function () {
    console.log("bye");
  };
}, []);
function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
