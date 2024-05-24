import { useState } from "react";

function App() {
  const [todo, setTodo] = useState();
  const [todos, setToodos] = useState([]);
  const onChange = (e) => setTodo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (todo === "") {
      return;
    }
    setToodos((currentArray) => [todo, ...currentArray]); // ... 을 붙임으로써 Array() 가 아닌 값만 가져온다
    setTodo(""); // todo 입력후 빈값으로 셋팅
  };
  console.log(todos);
  return (
    <div>
      <h1>TODO LIST({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={todo}
          type="text"
          placeholder="Write your TODO!"
        ></input>
        <button>Add TODO</button>
      </form>
    </div>
  );
}

export default App;
