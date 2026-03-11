// src/components/ModalMusic/ModalMusic.jsx
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
  videos = []  // NEW: YouTube metadata array
}) {
  const title = classicalSongTitle || jazzSongTitle || nerdcoreSongTitle;
  
  // Your ORIGINAL video sources - completely unchanged
  const videoSources = [
    classicalMusicVideoOne || jazzMusicVideoOne || nerdcoreMusicVideoOne,
    classicalMusicVideoTwo || jazzMusicVideoTwo || nerdcoreMusicVideoTwo,
    classicalMusicVideoThree || jazzMusicVideoThree || nerdcoreMusicVideoThree,
    classicalMusicVideoFour || jazzMusicVideoFour || nerdcoreMusicVideoFour,
    classicalMusicVideoFive || jazzMusicVideoFive || nerdcoreMusicVideoFive,
    classicalMusicVideoSix || jazzMusicVideoSix || nerdcoreMusicVideoSix
  ];

  return (
    <div className="modal-music">
      <div className="modal-music__title">{title}</div>
      <div className="modal-music__positioning">
        {/* VIDEO 1 */}
        <div className="modal-music__video_container modal-music__video_container_start">
          {videos[0] && (
            <div>
              <img src={videos[0].thumbnail} alt={videos[0].title} className="video-thumbnail" />
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
        </div>
      </div>
    </div>
  );
}

export default ModalMusic;
