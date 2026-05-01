// #Components
import ModalMusic from "../../ModalMusic/ModalMusic";

// #React
import { useState, useEffect } from 'react';

// #API
import { getJazzVideos } from '../../../utils/YoutubeApi';

function JazzMusicSongs({ favorites = [], onToggleFavorite, isLoggedIn }) {
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


  if (loading) return 
  <div className="modal-music__loading">Loading Jazz Music...</div>;

  return (
    <ModalMusic 
      jazzSongTitle="Jazz Songs"
      videos={videos}
      favorites={favorites}
      onToggleFavorite={onToggleFavorite}  
      isLoggedIn={isLoggedIn}
    />
  );
}

export default JazzMusicSongs;
