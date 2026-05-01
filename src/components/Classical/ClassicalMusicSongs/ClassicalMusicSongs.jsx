// #Components
import ModalMusic from "../../ModalMusic/ModalMusic";  

// #React
import { useState, useEffect } from 'react';  
// ↑ useState = store video data that changes over time
//   useEffect = automatically fetch videos when page loads

// #API
import { getClassicalVideos } from "../../../utils/YoutubeApi";  


function ClassicalMusicSongs({ favorites = [], onToggleFavorite, isLoggedIn={isLoggedIn} }) {
  // ↓ State #1: Empty array → will FILL with YouTube video data (titles/thumbnails)
  const [videos, setVideos] = useState([]);
  
  // ↓ State #2: true = show "Loading..." → false = show videos
  const [loading, setLoading] = useState(true);

  // ↓ Runs AUTOMATICALLY once when component loads (like page "onload")
  useEffect(() => {
    // 🔥 THIS shows in Network tab!
    // ↓ Calls your YoutubeApi.js → gets classical music videos
    getClassicalVideos()
      // ↓ Success: Store video data in 'videos' state
      .then(videos => setVideos(videos))
      // ↓ Error: Log to console (doesn't crash app)
      .catch(console.error)
      // ↓ Always runs: Hide loading spinner
      .finally(() => setLoading(false));
  }, []);  // ↑ Empty [] = "run only ONCE, never again"

useEffect(() => {
  console.log('🔥 Fetching classical videos...');
  getClassicalVideos()
    .then(videos => {
      console.table(videos);  // ← Shows your exact data
      setVideos(videos);
    })
}, []);

  // ↓ If still fetching → show loading screen
  if (loading) return 
  <div className="modal-music__loading">Loading Classical Music...</div>;
 
  // ↓ SUCCESS! Render ModalMusic with:
  return (
    <ModalMusic 
      classicalSongTitle="Classical Songs"        
      videos={videos} // ← NEW: Pass YouTube video data to ModalMusic
      favorites={favorites}
      onToggleFavorite={onToggleFavorite}   
      isLoggedIn={isLoggedIn} 
    />
  );
}

export default ClassicalMusicSongs; 
