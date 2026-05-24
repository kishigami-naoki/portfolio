# Task Manager

Reactで作成したタスク管理アプリです。

## 制作目的

React学習のアウトプットとして、実際にユーザーが使うことを意識したタスク管理アプリを制作しました。

単純なTodo機能だけでなく、状態管理・コンポーネント設計・API通信・レスポンシブ対応など、実務でも使われる機能を意識して実装しています。

---

## URL

### デモサイト

- [https://portfolio-six-wheat-citr3r6ot6.vercel.app/]

### GitHub

- [https://github.com/kishigami-naoki/portfolio]

---

## 使用技術

- React
- Vite
- React Router
- Framer Motion
- CSS
- LocalStorage
- Open-Meteo API
- Vercel
- dnd-kit

---

## 主な機能

- タスク追加
- タスク編集
- タスク削除
- ステータス変更（未対応 / 対応中 / 完了）
- フィルター機能
- LocalStorage保存
- ダークモード
- 天気情報取得
- レスポンシブ対応
- アニメーション実装
- ドラッグ&ドロップによる並び替え

---

## 工夫した点

### UI/UX

- スマホでも見やすいレスポンシブデザインを意識
- ダークモードを実装し、視認性を向上
- Framer Motionを使い、タスク追加・削除時に自然なアニメーションを追加
- ボタン配置や余白を調整し、操作しやすいUIを意識

### React設計

- コンポーネントを分割して保守性を向上
- propsを利用して状態管理を整理
- map/filterを利用してタスク一覧や絞り込みを実装
- LocalStorageとuseEffectを使い、データ保持を実装

---

## 苦労した点

- レスポンシブ対応時にボタン幅やレイアウト崩れが発生し、Flexboxの調整に苦労した
- Framer Motion導入時にAnimatePresence周りでエラーが発生し、コンポーネント構成を見直した
- 状態更新時に再レンダリングの挙動を理解するのに時間がかかった
- ダークモード対応時に各コンポーネントの色管理を統一するのが難しかった

---

## 今後追加したい機能

- Firebaseを利用したデータ永続化
- ログイン機能
- 締切日設定
- 優先度設定
- 検索機能

---
