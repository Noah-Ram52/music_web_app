// #CSS
import "./ModalMusic.css";

function ModalMusic({
  classicalSongTitle,
  classicalMusicVideoOne,
  classicalMusicVideoTwo,
  classicalMusicVideoThree,
  classicalMusicVideoFour,
  classicalMusicVideoFive,
  classicalMusicVideoSix,
  jazzSongTitle,
  jazzMusicVideoOne,
  jazzMusicVideoTwo,
  jazzMusicVideoThree,
  jazzMusicVideoFour,
  jazzMusicVideoFive,
  jazzMusicVideoSix,
  nerdcoreSongTitle,
  nerdcoreMusicVideoOne,
  nerdcoreMusicVideoTwo,
  nerdcoreMusicVideoThree,
  nerdcoreMusicVideoFour,
  nerdcoreMusicVideoFive,
  nerdcoreMusicVideoSix,
  videos = [],  // YouTube metadata array
  favorites = [], // Array of favorite items
  onToggleFavorite, // Function to toggle favorites
  isLoggedIn
}) 

{
  const title = classicalSongTitle || jazzSongTitle || nerdcoreSongTitle;
  
  const videoSources = [
    classicalMusicVideoOne || jazzMusicVideoOne || nerdcoreMusicVideoOne,
    classicalMusicVideoTwo || jazzMusicVideoTwo || nerdcoreMusicVideoTwo,
    classicalMusicVideoThree || jazzMusicVideoThree || nerdcoreMusicVideoThree,
    classicalMusicVideoFour || jazzMusicVideoFour || nerdcoreMusicVideoFour,
    classicalMusicVideoFive || jazzMusicVideoFive || nerdcoreMusicVideoFive,
    classicalMusicVideoSix || jazzMusicVideoSix || nerdcoreMusicVideoSix
  ];

const isVideoSaved = (index) => {
  return favorites.some(
    (fav) =>
      fav.genre === title &&
      fav.type === "video" &&
      fav.videoIndex === index
  );
};



// Toggle favorite for specific video
  const toggleVideoFavorite = (index) => {
    onToggleFavorite({
      genre: title,
      type: "video",
      videoIndex: index,
      title: videos[index]?.title,
      channel: videos[index]?.channel,
      thumbnail: videos[index]?.thumbnail,
      embedUrl: videoSources[index] || ""
    });
  };

  
  return (
    <div className="modal-music">
      <div className="modal-music__title">{title}</div>
      <div className="modal-music__positioning">
        {/* VIDEO 1 */}
        <div className="modal-music__video_container modal-music__video_container_start">
          {videos[0] && (
            <div>
              <img src={videos[0].thumbnail}  alt={videos[0].title} className="video-thumbnail" />
              <div>
                <div className="video-title">{videos[0].title}</div>
                <div className="video-channel">{videos[0].channel}</div>
              </div>
            </div>
          )}
          <iframe
            src={videoSources[0]}
            className="modal-music_video_container_size"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
            gyroscope; picture-in-picture"
            allowFullScreen
            title="Music Video 1"
          />
          {/* 🟢 STAR: only for logged-in users */}
          {isLoggedIn && (
          <button 
            className="video-favorite-star"
            onClick={() => toggleVideoFavorite(0)}
            title="Favorite video"
          >
            {isVideoSaved(0) ? "⭐" : "☆"}
          </button>
          )}
        </div>

        {/* VIDEO 2 */}
        <div className="modal-music__video_container modal-music__video_container_end">
          {videos[1] && (
            <div className="video-metadata">
              <img src={videos[1].thumbnail} alt={videos[1].title} className="video-thumbnail" />
              <div>
                <div className="video-title">{videos[1].title}</div>
                <div className="video-channel">{videos[1].channel}</div>
              </div>
            </div>
          )}
          <iframe
            src={videoSources[1]}
            className="modal-music_video_container_size"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
            gyroscope; picture-in-picture"
            allowFullScreen
            title="Music Video 2"
          />
          {isLoggedIn && (
          <button 
            className="video-favorite-star"
            onClick={() => toggleVideoFavorite(1)}
            title="Favorite video"
          >
            {isVideoSaved(1) ? "⭐" : "☆"}
          </button>
          )}
        </div>

        {/* VIDEO 3 */}
        <div className="modal-music__video_container modal-music__video_container_start">
          {videos[2] && (
            <div className="video-metadata">
              <img src={videos[2].thumbnail} alt={videos[2].title} className="video-thumbnail" />
              <div>
                <div className="video-title">{videos[2].title}</div>
                <div className="video-channel">{videos[2].channel}</div>
              </div>
            </div>
          )}
          <iframe
            src={videoSources[2]}
            className="modal-music_video_container_size"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
            gyroscope; picture-in-picture"
            allowFullScreen
            title="Music Video 3"
          />
          {isLoggedIn && (
          <button 
            className="video-favorite-star"
            onClick={() => toggleVideoFavorite(2)}
            title="Favorite video"
          >
            {isVideoSaved(2) ? "⭐" : "☆"}
          </button>
          )}
        </div>

        {/* VIDEO 4 */}
        <div className="modal-music__video_container modal-music__video_container_end">
          {videos[3] && (
            <div>
              <img src={videos[3].thumbnail} alt={videos[3].title} className="video-thumbnail" />
              <div>
                <div className="video-title">{videos[3].title}</div>
                <div className="video-channel">{videos[3].channel}</div>
              </div>
            </div>
          )}
          <iframe
            src={videoSources[3]}
            className="modal-music_video_container_size"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
            gyroscope; picture-in-picture"
            allowFullScreen
            title="Music Video 4"
          />
          {isLoggedIn && (
          <button 
            className="video-favorite-star"
            onClick={() => toggleVideoFavorite(3)}
            title="Favorite video"
          >
            {isVideoSaved(3) ? "⭐" : "☆"}
          </button>
          )}
        </div>

        {/* VIDEO 5 */}
        <div className="modal-music__video_container modal-music__video_container_start">
          {videos[4] && (
            <div className="video-metadata">
              <img src={videos[4].thumbnail} alt={videos[4].title} className="video-thumbnail" />
              <div>
                <div className="video-title">{videos[4].title}</div>
                <div className="video-channel">{videos[4].channel}</div>
              </div>
            </div>
          )}
          <iframe
            src={videoSources[4]}
            className="modal-music_video_container_size"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
            gyroscope; picture-in-picture"
            allowFullScreen
            title="Music Video 5"
          />
          {isLoggedIn && (
          <button 
            className="video-favorite-star"
            onClick={() => toggleVideoFavorite(4)}
            title="Favorite video"
          >
            {isVideoSaved(4) ? "⭐" : "☆"}
          </button>
          )}
        </div>

        {/* VIDEO 6 */}
        <div className="modal-music__video_container modal-music__video_container_end">
          {videos[5] && (
            <div className="video-metadata">
              <img src={videos[5].thumbnail} alt={videos[5].title} className="video-thumbnail" />
              <div>
                <div className="video-title">{videos[5].title}</div>
                <div className="video-channel">{videos[5].channel}</div>
              </div>
            </div>
          )}
          <iframe
            src={videoSources[5]}
            className="modal-music_video_container_size"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
            gyroscope; picture-in-picture"
            allowFullScreen
            title="Music Video 6"
          />
          {isLoggedIn && (
          <button 
            className="video-favorite-star"
            onClick={() => toggleVideoFavorite(5)}
            title="Favorite video"
          >
            {isVideoSaved(5) ? "⭐" : "☆"}
          </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ModalMusic;
