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

// #Components regarding Users
import UserLogin from "../UserLogin/UserLogin";
import UserSignup from "../UserSignup/UserSignup";
import UserProfile from "../UserProfile/UserProfile";

// #Authentication
import { authorize, checkToken, logout } from "../../utils/auth"; // adjust path as needed


function App() {
  // ## State for toggling the music genre menu
  // toggleMusicGenre flips it between false and true
  // isMusicGenreOpen controls whether the menu/modal is open
  const [isMusicGenreOpen, setIsMusicGenreOpen] = useState(false);
  const [menuTitle, setMenuTitle] = useState("");

  // ⭐ NEW: which auth view is active inside the modal
  const [authView, setAuthView] = useState("login"); // "login" or "signup"



  // Loading Route array default set to false.
  const [isLoadingRoute, setIsLoadingRoute] = useState(false);
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loginError, setLoginError] = useState("");

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


// 🟢 NEW LOGIN HANDLER
const handleLogin = async (email, password) => {
  try {
    setLoginError("");
    const response = await authorize(email, password);
    localStorage.setItem("user_jwt", response.token);
    localStorage.setItem("user", JSON.stringify(response.user));
    setIsLoggedIn(true);
    setUser(response.user);
    closeMusicMenu();
    console.log("Login successful:", response.user);
  } catch (error) {
    setLoginError(error.message);
    console.error("Login failed:", error.message);
  }
};

// 🟢 NEW CHECK TOKEN ON START
useEffect(() => {
  const token = localStorage.getItem("user_jwt");
  if (token) {
    checkToken(token)
      .then((response) => {
        setIsLoggedIn(true);
        setUser({ email: response.data.email, name: response.data.name });
      })
      .catch(() => {
        localStorage.removeItem("user_jwt");
        localStorage.removeItem("user");
      });
  }
}, []);

const handleLogout = () => {
  setIsLoggedIn(false);
  setUser(null);
  localStorage.removeItem("user_jwt");
  localStorage.removeItem("user");
};


  // Open the menu with a specific title (e.g. "Music Songs" or "Music Artist")
  const openMusicMenu = (title) => {
  setMenuTitle(title || "");
  if (title === "Login or Sign Up") {
    setAuthView("login");
  }
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
                      user={user}
                                     
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
                   {isMusicGenreOpen && menuTitle === "Login or Sign Up" && (
                      
                      authView === "login" ? (
                        <UserLogin
                          isMenuOpen={isMusicGenreOpen}
                          onClose={closeMusicMenu}
                          onSwitchToSignup={() => setAuthView("signup")}
                          onLogin={handleLogin}      // 🟢 NEW
                          loginError={loginError}    // 🟢 NEW
                          isLoggedIn={isLoggedIn}    // 🟢 NEW
                        />
                      ) : (
                        <UserSignup
                          isMenuOpen={isMusicGenreOpen}
                          onClose={closeMusicMenu}
                          onSwitchToLogin={() => setAuthView("login")}
                        />
                      )
                    )}
                    <Main />
                    <About />
                  </>
                }
              />
              <Route 
              path="/profile"
              element={
                <>
                    <Header 
                    onMusicToggle={openMusicMenu} 
                    isLoggedIn={isLoggedIn}
                    user={user}
                    
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

                    <UserProfile 
                    user={user}
                    onLogout={handleLogout} 
                    />
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
                    user={user}
                    onLogout={handleLogout}
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
                   {isMusicGenreOpen && menuTitle === "Login or Sign Up" && (
                      // ⭐ CHANGED: choose between login / signup based on authView
                      authView === "login" ? (
                        <UserLogin
                          isMenuOpen={isMusicGenreOpen}
                          onClose={closeMusicMenu}
                          // ⭐ pass callback that switches to signup
                          onSwitchToSignup={() => setAuthView("signup")}
                        />
                      ) : (
                        <UserSignup
                          isMenuOpen={isMusicGenreOpen}
                          onClose={closeMusicMenu}
                          // ⭐ pass callback that switches back to login
                          onSwitchToLogin={() => setAuthView("login")}
                        />
                      )
                    )}
                    <ClassicalMusicSongs />
               </>
              }>
             </Route>
             <Route path="/classical-music-artist" element={ <>
                    <Header 
                    onMusicToggle={openMusicMenu} 
                    isLoggedIn={isLoggedIn}
                    user={user}
                    onLogout={handleLogout}
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
                   {isMusicGenreOpen && menuTitle === "Login or Sign Up" && (
                      // ⭐ CHANGED: choose between login / signup based on authView
                      authView === "login" ? (
                        <UserLogin
                          isMenuOpen={isMusicGenreOpen}
                          onClose={closeMusicMenu}
                          // ⭐ pass callback that switches to signup
                          onSwitchToSignup={() => setAuthView("signup")}
                        />
                      ) : (
                        <UserSignup
                          isMenuOpen={isMusicGenreOpen}
                          onClose={closeMusicMenu}
                          // ⭐ pass callback that switches back to login
                          onSwitchToLogin={() => setAuthView("login")}
                        />
                      )
                    )}
                    <ClassicalMusicArtist />
               </>} />
             <Route path="/jazz-music-songs" element={  
              <>
                    <Header 
                    onMusicToggle={openMusicMenu} 
                    isLoggedIn={isLoggedIn}
                    user={user}
                    onLogout={handleLogout}
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
                  {isMusicGenreOpen && menuTitle === "Login or Sign Up" && (
                      // ⭐ CHANGED: choose between login / signup based on authView
                      authView === "login" ? (
                        <UserLogin
                          isMenuOpen={isMusicGenreOpen}
                          onClose={closeMusicMenu}
                          // ⭐ pass callback that switches to signup
                          onSwitchToSignup={() => setAuthView("signup")}
                        />
                      ) : (
                        <UserSignup
                          isMenuOpen={isMusicGenreOpen}
                          onClose={closeMusicMenu}
                          // ⭐ pass callback that switches back to login
                          onSwitchToLogin={() => setAuthView("login")}
                        />
                      )
                    )}
                 <JazzMusicSongs /> 
             </> 
            } />
             <Route path="/jazz-music-artist" element={ 
               <>
                <Header 
                    onMusicToggle={openMusicMenu} 
                    isLoggedIn={isLoggedIn}
                    user={user}
                    onLogout={handleLogout}
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
                   {isMusicGenreOpen && menuTitle === "Login or Sign Up" && (
                      // ⭐ CHANGED: choose between login / signup based on authView
                      authView === "login" ? (
                        <UserLogin
                          isMenuOpen={isMusicGenreOpen}
                          onClose={closeMusicMenu}
                          // ⭐ pass callback that switches to signup
                          onSwitchToSignup={() => setAuthView("signup")}
                        />
                      ) : (
                        <UserSignup
                          isMenuOpen={isMusicGenreOpen}
                          onClose={closeMusicMenu}
                          // ⭐ pass callback that switches back to login
                          onSwitchToLogin={() => setAuthView("login")}
                        />
                      )
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
                    user={user}
                    onLogout={handleLogout}
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
                   {isMusicGenreOpen && menuTitle === "Login or Sign Up" && (
                      // ⭐ CHANGED: choose between login / signup based on authView
                      authView === "login" ? (
                        <UserLogin
                          isMenuOpen={isMusicGenreOpen}
                          onClose={closeMusicMenu}
                          // ⭐ pass callback that switches to signup
                          onSwitchToSignup={() => setAuthView("signup")}
                        />
                      ) : (
                        <UserSignup
                          isMenuOpen={isMusicGenreOpen}
                          onClose={closeMusicMenu}
                          // ⭐ pass callback that switches back to login
                          onSwitchToLogin={() => setAuthView("login")}
                        />
                      )
                    )}
                    <NerdcoreMusicSongs /> 
               </>} 
               />
             <Route path="/nerdcore-music-artist" element={ 
              <>
                <Header 
                    onMusicToggle={openMusicMenu} 
                    isLoggedIn={isLoggedIn}
                    user={user}
                    onLogout={handleLogout}
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
                   {isMusicGenreOpen && menuTitle === "Login or Sign Up" && (
                      // ⭐ CHANGED: choose between login / signup based on authView
                      authView === "login" ? (
                        <UserLogin
                          isMenuOpen={isMusicGenreOpen}
                          onClose={closeMusicMenu}
                          // ⭐ pass callback that switches to signup
                          onSwitchToSignup={() => setAuthView("signup")}
                        />
                      ) : (
                        <UserSignup
                          isMenuOpen={isMusicGenreOpen}
                          onClose={closeMusicMenu}
                          // ⭐ pass callback that switches back to login
                          onSwitchToLogin={() => setAuthView("login")}
                        />
                      )
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
