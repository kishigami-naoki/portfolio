import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Task from "./Task";

function App() {
  return (
    <Router>
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          padding: "20px",
          background: "#222",
        }}
      >
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>
        <Link to="/task" style={{ color: "white", textDecoration: "none" }}>
          Task
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task" element={<Task />} />
      </Routes>
    </Router>
  );
}

export default App;
