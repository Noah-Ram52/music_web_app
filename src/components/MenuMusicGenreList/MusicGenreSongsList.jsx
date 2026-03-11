// #CSS
import "./MusicGenreSongsList.css";

// #Components
import ModalMenuMusic from "../ModalMenuMusic/ModalMenuMusic";

function MusicGenreSongsList({ isMenuOpen, onClose, title }) {

 const songsClassicalGenre = "Classical";
 const songsJazzGenre = "Jazz";
 const songsNerdcoreGenre = "Nerdcore";

  return (
    <div className="music-genre-songs-list">
    <ModalMenuMusic 
    isMenuOpen={isMenuOpen} 
    onClose={onClose} 
    title={title} 
    songsClassicalGenre={songsClassicalGenre} 
    songsJazzGenre={songsJazzGenre} 
    songsNerdcoreGenre={songsNerdcoreGenre}>
    </ModalMenuMusic>
    </div>
  );
}

export default MusicGenreSongsList;
