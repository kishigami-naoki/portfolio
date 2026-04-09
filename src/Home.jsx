import { Link } from "react-router-dom";

function Home() {
  const isMobile = window.innerWidth < 600;
  return (
    <div
      style={{
        background: "#f5f5f5",
        minHeight: "100vh",
        margin: 0,
        padding: isMobile ? "20px" : "40px",
        boxSizing: "border-box",
      }}
    >
      {/* ヘッダー */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: isMobile ? "28px" : "36px" }}>岸上直樹</h1>
        <p>Web制作エンジニアを目指しています</p>
      </div>

      {/* 自己紹介 */}
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "10px",
          maxWidth: "600px",
          margin: "0 auto 30px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2>自己紹介</h2>
        <p>
          専門卒業後、CEとして勤務。
          <br />
          現在はWeb制作エンジニアを目指して学習中です。
        </p>
      </div>

      {/* スキル */}
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
          maxWidth: "600px",
          margin: "0 auto 40px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
        }}
      >
        <h2>スキル</h2>
        <p>HTML / CSS / JavaScript / React</p>
      </div>

      {/* 制作物 */}
      <div style={{ textAlign: "center" }}>
        <h2 style={{ marginBottom: "10px" }}>制作物</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              width: "100%",
              maxWidth: "300px",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <h3>タスク管理アプリ</h3>
            <p>Reactで作成したTodoアプリ</p>
            <Link
              to="/task"
              style={{
                display: "inline-block",
                marginTop: "10px",
                padding: "10px 15px",
                background: "#667eea",
                color: "#fff",
                borderRadius: "5px",
                textDecoration: "none",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#556cd6";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "#667eea";
              }}
            >
              アプリを見る
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
