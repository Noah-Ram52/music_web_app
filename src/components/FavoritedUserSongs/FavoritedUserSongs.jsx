import "./FavoritedUserSongs.css";

function FavoritedUserSongs({ favorites = [] }) {
  const hasFavorites = Array.isArray(favorites) && favorites.length > 0;

  const renderVideos = (list) => {
    if (!list || !list.length) return null; // do not show per-genre empty messages

    return list.map((item, i) => (
      <div key={i} className="favorite-card">
        <div className="favorite-card__media">
          {item.embedUrl ? (
            <iframe
              src={item.embedUrl}
              title={item.title || "video"}
              className="favorite-card__iframe"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          ) : item.thumbnail ? (
            <img
              src={item.thumbnail}
              alt={item.title || 'favorite thumbnail'}
              className="favorite-card__thumbnail"
            />
          ) : null}
        </div>
        {item.title && <p className="favorite-card__title">{item.title}</p>}
      </div>
    ));
  };

  if (!hasFavorites) {
    return (
      <div className="favorited-user-songs">
        <h1>Favorited Songs</h1>
        <p>No Songs Saved</p>
      </div>
    );
  }

  return (
    <div className="favorited-user-songs">
      <h1>Favorited Songs</h1>
      <h2>Classical Songs</h2>
      <div className="favorited-user-songs__containers">{renderVideos(favorites.filter((f) => f.genre === "Classical Songs"))}
      </div>
      <h2>Jazz Songs</h2>
      <div className="favorited-user-songs__containers">
      {renderVideos(favorites.filter((f) => f.genre === "Jazz Songs"))}
      </div>
      <h2>Nerdcore Songs</h2>
      <div className="favorited-user-songs__containers">
      {renderVideos(favorites.filter((f) => f.genre === "Nerdcore Songs"))}
      </div>
    </div>
  );
}

export default FavoritedUserSongs;