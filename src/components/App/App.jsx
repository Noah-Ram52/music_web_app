// #CSS
import "./App.css";

// #React
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

// #Components
import Header from "../Header/Header";
import MusicGenreSongsList from "../MenuMusicGenre/MusicGenreSongsList";
import MenuMusicArtist from "../MenuMusicArtist/MenuMusicArtist";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";

function App() {
  // ## State for toggling the music genre menu
  // toggleMusicGenre flips it between false and true
  // isMusicGenreOpen controls whether the menu/modal is open

  const [isMusicGenreOpen, setIsMusicGenreOpen] = useState(false);
  const [menuTitle, setMenuTitle] = useState("");

  // Open the menu with a specific title (e.g. "Music Songs" or "Music Artist")
  const openMusicMenu = (title) => {
    setMenuTitle(title || "");
    setIsMusicGenreOpen(true);
  };

  

  return (
    <>
      <div className="page">
        <div className="page__content">
          <div className="page__main">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Header onMusicToggle={openMusicMenu} />
                    {isMusicGenreOpen && menuTitle === "Music Songs" && (
                      <MusicGenreSongsList
                        isMenuOpen={isMusicGenreOpen}
                        onClose={() => setIsMusicGenreOpen(false)}
                        title={menuTitle}
                      />
                    )}
                    {isMusicGenreOpen && menuTitle === "Music Artist" && (
                      <MenuMusicArtist
                        isMenuOpen={isMusicGenreOpen}
                        onClose={() => setIsMusicGenreOpen(false)}
                        title={menuTitle}
                      />
                    )}
                    <Main />

                    <About />
                  </>
                }
              />
              <Route></Route>
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
