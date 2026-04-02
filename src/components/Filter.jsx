function Filter({ filter, setFilter }) {
  return (
    <div className="filter">
      <button
        className={filter === "all" ? "active" : ""}
        onClick={() => setFilter("all")}
      >
        すべて
      </button>

      <button
        className={filter === "active" ? "active" : ""}
        onClick={() => setFilter("active")}
      >
        チェックなし
      </button>

      <button
        className={filter === "completed" ? "active" : ""}
        onClick={() => setFilter("completed")}
      >
        チェックあり
      </button>
    </div>
  );
}
export default Filter;
