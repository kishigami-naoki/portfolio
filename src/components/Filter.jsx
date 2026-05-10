const FILTERS = {
  ALL: "all",
  TODO: "todo",
  DOING: "doing",
  DONE: "done",
};

function Filter({ filter, onChangeFilter }) {
  const options = [
    { key: FILTERS.ALL, label: "すべて" },
    { key: FILTERS.TODO, label: "未対応" },
    { key: FILTERS.DOING, label: "対応中" },
    { key: FILTERS.DONE, label: "完了" },
  ];

  return (
    <div className="filter">
      {options.map((opt) => (
        <button
          key={opt.key}
          className={filter === opt.key ? "active" : ""}
          onClick={() => onChangeFilter(opt.key)}
          disabled={filter === opt.key}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

export default Filter;
