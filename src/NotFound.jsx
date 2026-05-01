import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notfound">
      <h1 className="nf-title">404</h1>
      <p className="nf-text">ページが見つかりません</p>

      <Link to="/" className="nf-btn">
        ホームに戻る
      </Link>
    </div>
  );
}

export default NotFound;
