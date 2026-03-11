// #Components
import ModalMusic from "../../ModalMusic/ModalMusic";  
// ↑ Goes UP 2 folders (ClassicalMusicSongs → Classical → components) → ModalMusic folder

// #React
import { useState, useEffect } from 'react';  
// ↑ useState = store video data that changes over time
//   useEffect = automatically fetch videos when page loads

// #API
import { getClassicalVideos } from "../../../utils/api/YoutubeApi";  
// ↑ Your path: ClassicalMusicSongs → Classical → components → UP 3 → utils → api → YoutubeApi.js ✅ CORRECT

function ClassicalMusicSongs() {
  // ↓ State #1: Empty array → will FILL with YouTube video data (titles/thumbnails)
  const [videos, setVideos] = useState([]);
  
  // ↓ State #2: true = show "Loading..." → false = show videos
  const [loading, setLoading] = useState(true);

  // ↓ Runs AUTOMATICALLY once when component loads (like page "onload")
  useEffect(() => {
    // ↓ Calls your YoutubeApi.js → gets classical music videos
    getClassicalVideos()
      // ↓ Success: Store video data in 'videos' state
      .then(videos => setVideos(videos))
      // ↓ Error: Log to console (doesn't crash app)
      .catch(console.error)
      // ↓ Always runs: Hide loading spinner
      .finally(() => setLoading(false));
  }, []);  // ↑ Empty [] = "run only ONCE, never again"

  // ↓ Your ORIGINAL 6 classical videos - these ALWAYS play (YouTube API just adds titles)
  const fallbackVideos = [
    "https://www.youtube.com/embed/sbTVZMJ9Z2I?controls=1",  // ← Video #1
    "https://www.youtube.com/embed/BV7RkEL6oRc?controls=1",  // ← Video #2
    "https://www.youtube.com/embed/CxKR1smmiNo?controls=1",  // ← Video #3
    "https://www.youtube.com/embed/hajZ6_thqms?controls=1",  // ← Video #4
    "https://www.youtube.com/embed/H1Dvg2MxQn8?controls=1",  // ← Video #5
    "https://www.youtube.com/embed/oHiU-u2ddJ4?controls=1"   // ← Video #6
  ];

  // ↓ If still fetching → show loading screen
  if (loading) return <div className="modal-music__loading">Loading classical tracks...</div>;

  // ↓ SUCCESS! Render ModalMusic with:
  return (
    <ModalMusic 
      classicalSongTitle="Classical Songs"                    // ↑ Page title
      classicalMusicVideoOne={fallbackVideos[0]}              // ↑ Plays video #1
      classicalMusicVideoTwo={fallbackVideos[1]}              // ↑ Plays video #2
      classicalMusicVideoThree={fallbackVideos[2]}            // ↑ Plays video #3
      classicalMusicVideoFour={fallbackVideos[3]}             // ↑ Plays video #4
      classicalMusicVideoFive={fallbackVideos[4]}             // ↑ Plays video #5
      classicalMusicVideoSix={fallbackVideos[5]}              // ↑ Plays video #6
      videos={videos}                                         // ↑ Shows titles/thumbnails OVER videos
    />
  );
}

export default ClassicalMusicSongs;  // ↑ Makes this component usable in App.jsx routes
