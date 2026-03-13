// #Components
import ModalMusic from "../../ModalMusic/ModalMusic";

// #React
import { useState, useEffect } from 'react';

// #API
import { getJazzVideos } from '../../../utils/api/YoutubeApi';

function JazzMusicSongs() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getJazzVideos()
      .then(videos => setVideos(videos))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

useEffect(() => {
  console.log('🔥 Fetching jazz videos...');
  getJazzVideos()
    .then(videos => {
      console.table(videos);  // ← Shows your exact data
      setVideos(videos);
    })
}, []);

  // Your existing hardcoded embeds as fallback
  const fallbackVideos = [
    "https://www.youtube.com/embed/CutrIZzTJl0?controls=1",
    "https://www.youtube.com/embed/HT_Zs5FKDZE?controls=1", 
    "https://www.youtube.com/embed/mKf1x3CALAE?controls=1",
    "https://www.youtube.com/embed/9Zyr0IDaRXQ?controls=1",
    "https://www.youtube.com/embed/-488UORrfJ0?controls=1",
    "https://www.youtube.com/embed/fsJ3JjpZyoA?controls=1"
  ];

  if (loading) return 
  <div className="modal-music__loading">Loading Jazz Music...</div>;

  return (
    <ModalMusic 
      jazzSongTitle="Jazz Songs"
      jazzMusicVideoOne={fallbackVideos[0]}      
      jazzMusicVideoTwo={fallbackVideos[1]}
      jazzMusicVideoThree={fallbackVideos[2]}
      jazzMusicVideoFour={fallbackVideos[3]}
      jazzMusicVideoFive={fallbackVideos[4]}
      jazzMusicVideoSix={fallbackVideos[5]}
      videos={videos}
    />
  );
}

export default JazzMusicSongs;
