import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Home";
import Task from "./Task";
import { NavLink } from "react-router-dom";
import NotFound from "./NotFound";

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
          alignItems: "center",
          justifyContent: "space-between",
          padding: "15px 20px",
          background: "#222",
        }}
      >
        {/* 左（空 or ロゴ） */}
        <div style={{ width: "60px" }}></div>

        {/* 中央ナビ */}
        <div
          style={{
            display: "flex",
            gap: isMobile ? "10px" : "30px",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
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
        </div>

        {/* 右ボタン */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
