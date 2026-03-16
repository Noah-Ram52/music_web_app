// #CSS
import "./App.css";

// #React
import { useState, useEffect } from "react";

// #React-Router
import { Routes, Route, useLocation, useNavigationType } from "react-router-dom";



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
import Preloader from "../Preloader/Preloader";
import About from "../About/About";
import Footer from "../Footer/Footer";

function App() {
  // ## State for toggling the music genre menu
  // toggleMusicGenre flips it between false and true
  // isMusicGenreOpen controls whether the menu/modal is open
  const [isMusicGenreOpen, setIsMusicGenreOpen] = useState(false);
  const [menuTitle, setMenuTitle] = useState("");

  // Loading Route array default set to false.
  const [isLoadingRoute, setIsLoadingRoute] = useState(false);
  

  const location = useLocation();
  const navigationType = useNavigationType();

  // Whenever button is clicked it will load that button
   useEffect(() => {
    if (navigationType !== "POP") {
      setIsLoadingRoute(true);
      const timer = setTimeout(() => {
        setIsLoadingRoute(false);
      }, 1250);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, navigationType]);

  // Page refresh detection
  useEffect(() => {
    // Show loading on EVERY page load/refresh
    setIsLoadingRoute(true);
    const timer = setTimeout(() => {
      setIsLoadingRoute(false);
    }, 2000); // 2 seconds
    return () => clearTimeout(timer);
  }, []); // Empty array = runs ONCE per page load

  // Open the menu with a specific title (e.g. "Music Songs" or "Music Artist")
  const openMusicMenu = (title) => {
    setMenuTitle(title || "");
    setIsMusicGenreOpen(true);
  };

    // Extracted close function (used everywhere) ADDED
  const closeMusicMenu = () => {
    setIsMusicGenreOpen(false);
    setMenuTitle("");
  };


  return (
    <>
      <div className="page">
        <div className="page__content">
       {isLoadingRoute && (
            <div className="page__preloader-overlay">
              <Preloader />
            </div>
          )}
          <div className="page__main">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Header 
                    onMusicToggle={openMusicMenu} 
                    isLoggedIn={isLoggedIn}
                    onLoginClick={openAuthModal} 
                    />
                    {isMusicGenreOpen && menuTitle === "Music Songs" && (
                      <MusicGenreSongsList
                        isMenuOpen={isMusicGenreOpen}
                        onClose={closeMusicMenu}
                        title={menuTitle}
                      />
                    )}
                    {isMusicGenreOpen && menuTitle === "Music Artist" && (
                      <MenuMusicArtist
                        isMenuOpen={isMusicGenreOpen}
                        onClose={closeMusicMenu}
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
                    <Header 
                    onMusicToggle={openMusicMenu} 
                    isLoggedIn={isLoggedIn}
                    onLoginClick={openAuthModal} 
                    />
                    
                    {isMusicGenreOpen && menuTitle === "Music Songs" && (
                      <MusicGenreSongsList
                        isMenuOpen={isMusicGenreOpen}
                        onClose={closeMusicMenu}
                        title={menuTitle}
                      />
                    )}
                    {isMusicGenreOpen && menuTitle === "Music Artist" && (
                      <MenuMusicArtist
                        isMenuOpen={isMusicGenreOpen}
                        onClose={closeMusicMenu}
                        title={menuTitle}
                      />
                    )}
                    <ClassicalMusicSongs />
               </>
              }>
             </Route>
             <Route path="/classical-music-artist" element={ <>
                    <Header 
                    onMusicToggle={openMusicMenu} 
                    isLoggedIn={isLoggedIn}
                    onLoginClick={openAuthModal} 
                    />
                    {isMusicGenreOpen && menuTitle === "Music Songs" && (
                      <MusicGenreSongsList
                        isMenuOpen={isMusicGenreOpen}
                        onClose={closeMusicMenu}
                        title={menuTitle}
                      />
                    )}
                    {isMusicGenreOpen && menuTitle === "Music Artist" && (
                      <MenuMusicArtist
                        isMenuOpen={isMusicGenreOpen}
                        onClose={closeMusicMenu}
                        title={menuTitle}
                      />
                    )}
                    <ClassicalMusicArtist />
               </>} />
             <Route path="/jazz-music-songs" element={  
              <>
                    <Header 
                    onMusicToggle={openMusicMenu} 
                    isLoggedIn={isLoggedIn}
                    onLoginClick={openAuthModal} 
                    />
                    {isMusicGenreOpen && menuTitle === "Music Songs" && (
                      <MusicGenreSongsList
                        isMenuOpen={isMusicGenreOpen}
                        onClose={closeMusicMenu}
                        title={menuTitle}
                      />
                    )}
                    {isMusicGenreOpen && menuTitle === "Music Artist" && (
                      <MenuMusicArtist
                        isMenuOpen={isMusicGenreOpen}
                        onClose={closeMusicMenu}
                        title={menuTitle}
                      />
                    )}
                    
                 <JazzMusicSongs /> 
             </> 
            } />
             <Route path="/jazz-music-artist" element={ 
               <>
                <Header 
                    onMusicToggle={openMusicMenu} 
                    isLoggedIn={isLoggedIn}
                    onLoginClick={openAuthModal} 
                    />
                    {isMusicGenreOpen && menuTitle === "Music Songs" && (
                      <MusicGenreSongsList
                        isMenuOpen={isMusicGenreOpen}
                        onClose={closeMusicMenu}
                        title={menuTitle}
                      />
                    )}
                    {isMusicGenreOpen && menuTitle === "Music Artist" && (
                      <MenuMusicArtist
                        isMenuOpen={isMusicGenreOpen}
                        onClose={closeMusicMenu}
                        title={menuTitle}
                      />
                    )} 
                    <JazzMusicArtist /> 
                  </>
                } 
                />
             <Route path="/nerdcore-music-songs" element={
               <> 
                <Header 
                    onMusicToggle={openMusicMenu} 
                    isLoggedIn={isLoggedIn}
                    onLoginClick={openAuthModal} 
                    />
                    {isMusicGenreOpen && menuTitle === "Music Songs" && (
                      <MusicGenreSongsList
                        isMenuOpen={isMusicGenreOpen}
                        onClose={closeMusicMenu}
                        title={menuTitle}
                      />
                    )}
                    {isMusicGenreOpen && menuTitle === "Music Artist" && (
                      <MenuMusicArtist
                        isMenuOpen={isMusicGenreOpen}
                        onClose={closeMusicMenu}
                        title={menuTitle}
                      />
                    )}  
                    <NerdcoreMusicSongs /> 
               </>} 
               />
             <Route path="/nerdcore-music-artist" element={ 
              <>
                <Header 
                    onMusicToggle={openMusicMenu} 
                    isLoggedIn={isLoggedIn}
                    onLoginClick={openAuthModal} 
                    />
                    {isMusicGenreOpen && menuTitle === "Music Songs" && (
                      <MusicGenreSongsList
                        isMenuOpen={isMusicGenreOpen}
                        onClose={closeMusicMenu}
                        title={menuTitle}
                      />
                    )}
                    {isMusicGenreOpen && menuTitle === "Music Artist" && (
                      <MenuMusicArtist
                        isMenuOpen={isMusicGenreOpen}
                        onClose={closeMusicMenu}
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
