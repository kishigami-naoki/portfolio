const FILTERS = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETED: "completed",
};

function Filter({ filter, onChangeFilter }) {
  const options = [
    { key: FILTERS.ALL, label: "すべて" },
    { key: FILTERS.ACTIVE, label: "チェックなし" },
    { key: FILTERS.COMPLETED, label: "チェックあり" },
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
