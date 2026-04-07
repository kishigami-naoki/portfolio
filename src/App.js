import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Task from "./Task";

function App() {
  return (
    <Router>
      <nav style={{ padding: "20px", textAlign: "center" }}>
        <Link to="/" style={{ marginRight: "20px" }}>
          Home
        </Link>
        <Link to="/task">Task</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task" element={<Task />} />
      </Routes>
    </Router>
  );
}

export default App;
