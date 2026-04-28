import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Home";
import Task from "./Task";
import { NavLink } from "react-router-dom";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

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
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "#4ade80" : "white",
            textDecoration: "none",
            padding: "10px",
          })}
        >
          Home
        </NavLink>

        <NavLink
          to="/task"
          style={({ isActive }) => ({
            color: isActive ? "#4ade80" : "white",
            textDecoration: "none",
            padding: "10px",
          })}
        >
          Task
        </NavLink>
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            marginLeft: "auto",
            padding: "6px 12px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            background: darkMode ? "#facc15" : "#374151",
            color: darkMode ? "#111" : "#fff",
          }}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task" element={<Task />} />
      </Routes>
    </Router>
  );
}

export default App;
