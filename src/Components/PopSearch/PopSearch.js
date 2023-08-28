import { useNavigate } from "react-router-dom";
import "./PopSearch.css";

function PopSearch({ search }) {
  const navigate = useNavigate();
  //Navigate is used for route
  //navigate is hook
  return (
    <div>
      <div>
        {search.length === 0 ? (
          <p>search user!</p>
        ) : (
          <div className="pop-up-container">
            {search.map((m) => (
              <div
                className="pop-up-profiles"
                onClick={() => {
                  navigate(`/profile/${m?.username}`);
                }}
              >
                <div className="pop-up-img">
                  <img
                    src={m?.avatarUrl}
                    alt="profile-pic"
                    className="pop-search-profile-img"
                  />
                </div>
                <div className="pop-up-details">
                  <p>
                    {m?.firstName}
                    {m?.lastName}
                  </p>
                  <p>{m?.username}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export { PopSearch };
