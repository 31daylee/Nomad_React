import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import "./styles.css";
import { useState } from "react";
import Aside from "./components/Aside";

function App() {
  const [genres, setGenres] = useState([
    "Action",
    "Comedy",
    "Romance",
    "Horror",
  ]);

  return (
    <Router>
      <Aside width={320} genres={genres} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
