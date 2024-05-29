import React, { useState } from "react";
import ReactDOM from "react-dom";
const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    console.log(e.target);
  };
  return { value, onChange };
};

const App = () => {
  const name = useInput("Mr.");
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name}></input>
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
