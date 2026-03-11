// #CSS
import "./App.css";

// #React
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

// #Components
import Header from "../Header/Header";
import MusicGenreSongsList from "../MenuMusicGenreList/MusicGenreSongsList";
import MenuMusicArtist from "../MenuMusicArtist/MenuMusicArtist";
import Main from "../Main/Main";
import ClassicalMusicSongs from "../Classical/ClassicalMusicSongs/ClassicalMusicSongs";
import ClassicalMusicArtist from "../Classical/ClassicalMusicArtist/ClassicalMusicArtist";
import JazzMusicSongs from "../Jazz/JazzMusicSongs/JazzMusicSongs";
import JazzMusicArtist from "../Jazz/JazzMusicArtist/JazzMusicArtist";
import NerdcoreMusicSongs from "../Nerdcore/NerdcoreMusicSongs/NerdcoreMusicSongs";
import NerdcoreMusicArtist from "../Nerdcore/NerdcoreMusicArtist/NerdcoreMusicArtist";
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
              <Route 
              path="/classical-music-songs" 
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
                    <ClassicalMusicSongs />
               </>
              }>
             </Route>
             <Route path="/classical-music-artist" element={ <>
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
                    <ClassicalMusicArtist />
               </>} />
             <Route path="/jazz-music-songs" element={  
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
                    
                 <JazzMusicSongs /> 
             </> 
            } />
             <Route path="/jazz-music-artist" element={ 
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
                    <JazzMusicArtist /> 
                  </>
                } 
                />
             <Route path="/nerdcore-music-songs" element={
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
                    <NerdcoreMusicSongs /> 
               </>} 
               />
             <Route path="/nerdcore-music-artist" element={ 
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
                    <NerdcoreMusicArtist /> 
                    </>
                  } 
                  />
                  
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
