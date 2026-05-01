import { Link } from "react-router-dom";
import Weather from "./components/Weather";

function Home() {
  return (
    <div className="home">
      {/* ヘッダー */}
      <div className="home-header">
        <h1 className="home-title">岸上直樹</h1>
        <p>Web制作エンジニアを目指しています</p>
      </div>

      {/* 自己紹介 */}
      <div className="card">
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
      <div className="card">
        <h2>スキル</h2>
        <p>
          HTML / CSS / JavaScript / React
          <br />
          （コンポーネント分割 / 状態管理 / CRUD実装）
        </p>
      </div>

      {/* 制作物 */}
      <div className="works">
        <h2>制作物</h2>

        <div className="work-card">
          <h3>タスク管理アプリ</h3>

          <p className="work-text">
            Reactで作成したCRUD対応のタスク管理アプリです。
            フィルター機能やlocalStorageによるデータ保存、
            キーボード操作（Enter/Escape）などUXを意識して実装しました。
            <strong>
              コンポーネント分割と状態管理を意識して設計しています。
            </strong>
          </p>

          <div className="work-links">
            <Link to="/task" className="btn-primary">
              アプリを見る
            </Link>

            <a
              href="https://github.com/kishigami-naoki/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              GitHubを見る
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
