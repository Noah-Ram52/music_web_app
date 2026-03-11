// #CSS
import "./MenuMusicArtist.css";

// #Components
import ModalMenuMusic from "../ModalMenuMusic/ModalMenuMusic";

function MenuMusicArtist({ isMenuOpen, onClose, title }) {

 const songsClassicalArtist = "Classical";
 const songsJazzArtist = "Jazz";
 const songsNerdcoreArtist = "Nerdcore";

  return (
    <div className="menu-music-artist">
      <ModalMenuMusic 
      isMenuOpen={isMenuOpen} 
      onClose={onClose} 
      title={title} 
      songsClassicalArtist={songsClassicalArtist} 
      songsJazzArtist={songsJazzArtist} 
      songsNerdcoreArtist={songsNerdcoreArtist} />
    </div>
  );
}

export default MenuMusicArtist;
