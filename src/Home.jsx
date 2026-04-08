import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>岸上直樹</h1>
      <p>Web制作エンジニアを目指しています</p>

      <h2>スキル</h2>
      <p>HTML / CSS / JavaScript / React</p>

      <h2>制作物</h2>
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          maxWidth: "300px",
          margin: "20px auto",
        }}
      >
        <h3>タスク管理アプリ</h3>
        <p>Reactで作成したTodoアプリ</p>
        <Link to="/task">見る →</Link>
      </div>

      <h2>強み</h2>
      <p>継続して学習し、実際に動くアプリを作れること</p>
    </div>
  );
}

export default Home;
