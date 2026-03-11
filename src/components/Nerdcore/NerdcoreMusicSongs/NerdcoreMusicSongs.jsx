// #Components
import ModalMusic from "../../ModalMusic/ModalMusic";

// #React
import { useState, useEffect } from 'react';

// #API
import { getNerdcoreVideos } from '../../../utils/api/YoutubeApi';

function NerdcoreMusicSongs() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNerdcoreVideos()
      .then(videos => setVideos(videos))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

    const fallbackVideos = [
    "https://www.youtube.com/embed/elulJJxASXw?controls=1",
    "https://www.youtube.com/embed/HK6N05s7bQU?controls=1",
    "https://www.youtube.com/embed/7C4uuz2dBDA?controls=1",
    "https://www.youtube.com/embed/TZTng1oClVY?controls=1",
    "https://www.youtube.com/embed/21r5Of9ttqs?controls=1",
    "https://www.youtube.com/embed/ITQN2YpV0SM?controls=1"
   
  ];

if (loading) return <div className="modal-music__loading">Loading...</div>;
  

  return (
  <ModalMusic 
      nerdcoreSongTitle="Nerdcore Songs"
      nerdcoreMusicVideoOne={fallbackVideos[0]}      
      nerdcoreMusicVideoTwo={fallbackVideos[1]}
      nerdcoreMusicVideoThree={fallbackVideos[2]}
      nerdcoreMusicVideoFour={fallbackVideos[3]}
      nerdcoreMusicVideoFive={fallbackVideos[4]}
      nerdcoreMusicVideoSix={fallbackVideos[5]}
      videos={videos}
   />
  );
}

export default NerdcoreMusicSongs;