import ReactDOM from "react-dom";

const App = () => {
  return (
    <div className="App">
      <button>Hello</button>
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
