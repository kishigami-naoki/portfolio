import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        background: "#f5f5f5",
        minHeight: "100vh",
        margin: 0,
        padding: "40px",
        boxSizing: "border-box",
      }}
    >
      {/* ヘッダー */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>岸上直樹</h1>
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
          専門学校卒業後、CEとして勤務していました。
          <br />
          現在はWeb制作エンジニアへのキャリアチェンジを目指し、Reactを中心に学習しています。
          <br />
          コンポーネント設計や状態管理を意識し、実務を想定したアプリ開発に取り組んでいます。
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
        <p>
          HTML / CSS / JavaScript / React
          <br />
          （コンポーネント分割 / 状態管理 / CRUD実装）
        </p>
      </div>

      {/* 制作物 */}
      <div style={{ textAlign: "center" }}>
        <h2 style={{ marginBottom: "20px" }}>制作物</h2>

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
            <p style={{ fontSize: "14px", color: "#555" }}>
              Reactで作成したCRUD対応のタスク管理アプリです。
              フィルター機能やlocalStorageによるデータ保存、
              キーボード操作（Enter/Escape）などUXを意識して実装しました。
              <strong>
                コンポーネント分割と状態管理を意識して設計しています。
              </strong>
            </p>

            <div
              style={{
                marginTop: "10px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <Link
                to="/task"
                style={{
                  padding: "10px 15px",
                  background: "#667eea",
                  color: "#fff",
                  borderRadius: "5px",
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                アプリを見る
              </Link>

              <a
                href="https://github.com/kishigami-naoki/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "14px",
                  color: "#4f46e5",
                  textAlign: "center",
                }}
              >
                GitHubを見る
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
