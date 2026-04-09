import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Task from "./Task";

function App() {
  const isMobile = window.innerWidth < 600;

  return (
    <Router>
      <nav
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
          gap: isMobile ? "10px" : "30px",
          padding: "15px",
          background: "#222",
        }}
      >
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => (e.target.style.color = "#aaa")}
          onMouseLeave={(e) => (e.target.style.color = "white")}
        >
          Home
        </Link>
        <Link
          to="/task"
          style={{
            color: "white",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => (e.target.style.color = "#aaa")}
          onMouseLeave={(e) => (e.target.style.color = "white")}
        >
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
