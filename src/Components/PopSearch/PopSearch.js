import "./PopSearch.css";

function PopSearch({ search }) {
  return (
    <div>
      {search.length === 0 ? (
        <p>search user!</p>
      ) : (
        <div>
          {search.map((m) => (
            <p>{m?.username}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export { PopSearch };
