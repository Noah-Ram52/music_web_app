// #CSS
import "./App.css";

// #React
import { useState, useEffect } from "react";

// #React-Router
import { Routes, Route, useLocation, useNavigationType } from "react-router-dom";

// #Components
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
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
import ProfileInformation from "../ProfileInformation/ProfileInformation";


// #Authentication
import { authorize, checkToken, signup} from "../../utils/auth"; 


function App() {
  // ## State for toggling the music genre menu
  // toggleMusicGenre flips it between false and true
  // isMusicGenreOpen controls whether the menu/modal is open
  const [isMusicGenreOpen, setIsMusicGenreOpen] = useState(false);
  const [menuTitle, setMenuTitle] = useState("");

  // Which auth view is active inside the modal
  const [authView, setAuthView] = useState("login"); // "login" or "signup"

  // Loading Route array default set to false.
  // const [isLoadingRoute, setIsLoadingRoute] = useState(false);
  const [isLoadingRoute, setIsLoadingRoute] = useState(false);
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loginError, setLoginError] = useState("");
  const [isProfileOpen, setIsProfileOpen] = useState(false);

 const [favorites, setFavorites] = useState(() => {
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;
  if (!user) return [];
  const key = `favorites_${user.email}`;
  const stored = localStorage.getItem(key);
  return stored ? JSON.parse(stored) : [];
});

  const location = useLocation();
  const navigationType = useNavigationType();

  // Whenever button is clicked it will load that button
   useEffect(() => {
    if (navigationType !== "POP") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsLoadingRoute(true);
      const timer = setTimeout(() => {
        setIsLoadingRoute(false);
      }, 1250);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, navigationType]);

  // Page refresh detection
  useEffect(() => {
  const timer = setTimeout(() => {
    setIsLoadingRoute(false);
  }, 2000);

  return () => clearTimeout(timer);
}, []);

  const handleSignup = async (name, email, password) => {
    try {
      setLoginError("");
      const response = await signup(name, email, password);
      console.log("Signup Data:", response);
      await handleLogin(email, password);
    } catch (error) {
      setLoginError(error.message);
      console.error("Signup failed:", error.message);
    }
  };

// LOGIN HANDLER

const handleLogin = async (email, password) => {
  try {
    setLoginError("");
    const response = await authorize(email, password);
    localStorage.setItem("user_jwt", response.token);
    
    console.log("FULL LOGIN RESPONSE:", response);

    // Capitalizes first letter of username from email
    const username = email.split('@')[0];  // "john" from "john@example.com"
    const capitalizedName = username.charAt(0).toUpperCase() + username.slice(1);

    //  Use email as display name
    const displayUser = { name: capitalizedName, email };
    localStorage.setItem("user", JSON.stringify(displayUser));
    
    setIsLoggedIn(true);
    setUser(displayUser);
    closeMusicMenu();
    console.log("Login successful:", displayUser.name);
  } catch (error) {
    setLoginError(error.message);
    console.error("Login failed:", error.message);
  }
};

// CHECK TOKEN ON START

useEffect(() => {
  const token = localStorage.getItem("user_jwt");
  if (token) {
    checkToken(token)
      .then((response) => {

        setIsLoggedIn(true);
        
        setUser({ email: response.data.email, name: response.data.name });

        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      })
      .catch((error) => {
        console.error("Token check failed:", error); // Add logging
        localStorage.removeItem("user_jwt");
        localStorage.removeItem("user");
        setIsLoggedIn(false);
        setUser(null);
      });
  }
}, []);

const handleLogout = () => {
  setIsLoggedIn(false);
  setUser(null);
  localStorage.removeItem("user_jwt");
  localStorage.removeItem("user");
};

// Toggle favorite function to add/remove items from favorites list and sync with localStorage
const toggleFavorite = (item) => {
  setFavorites((prev) => {
    const storedUser = localStorage.getItem("user");
    const user = storedUser ? JSON.parse(storedUser) : null;
    const key = user ? `favorites_${user.email}` : "favorites";
    
    const exists = prev.some(
      (fav) => fav.genre === item.genre &&
      fav.type === item.type &&
      fav.videoIndex === item.videoIndex
    );

    const updated = exists
      ? prev.filter(
          (fav) =>
            !(
              fav.genre === item.genre &&
              fav.type === item.type &&
              fav.videoIndex === item.videoIndex
            )
        )
      : [...prev, item];

    localStorage.setItem(key, JSON.stringify(updated));
    return updated;
  });
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

  const openProfile = () => setIsProfileOpen(true);
  const closeProfile = () => setIsProfileOpen(false);

  return (
    <>
      

    {isMusicGenreOpen && (
      <div className={`modal-wrapper ${menuTitle === "Music Songs" ? "pos-songs" : menuTitle === "Music Artist" ? "pos-artist" : "pos-auth"}`}>
          {menuTitle === "Music Songs" && (
            <MusicGenreSongsList isMenuOpen={isMusicGenreOpen} onClose={closeMusicMenu} title={menuTitle} />
          )}
          {menuTitle === "Music Artist" && (
            <MenuMusicArtist isMenuOpen={isMusicGenreOpen} onClose={closeMusicMenu} title={menuTitle} />
          )}
          {menuTitle === "Login or Sign Up" && (
            authView === "login" ? <UserLogin isMenuOpen={isMusicGenreOpen}
            onClose={closeMusicMenu}
            onSwitchToSignup={() => setAuthView("signup")}
            onLogin={handleLogin}     
            loginError={loginError}    
            isLoggedIn={isLoggedIn} /> : <UserSignup isMenuOpen={isMusicGenreOpen}
            onClose={closeMusicMenu}
            onSwitchToLogin={() => setAuthView("login")}
            onSignup={handleSignup} />
          )}
     </div>
   )}
      <div className="page">
        <div className="page__content">
       {isLoadingRoute && (
            <div className="page__preloader-overlay">
              <Preloader />
            </div>
          )}
          <div className="page__main">
            <Header 
              onMusicToggle={openMusicMenu} 
              isLoggedIn={isLoggedIn}
              user={user}
              onLogout={handleLogout}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <> 
                    <Main />
                    <About />
                  </>
                }
              />

              
              <Route 
                path="/profile"
                element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <>
                    <UserProfile 
                    user={user}
                    onLogout={handleLogout}
                    onOpenProfile={openProfile}  
                    favorites={favorites}
                    />
                    {isProfileOpen && (
                      <div className="page__overlay" onClick={closeProfile}>
                        <div className="profile-modal" onClick={(e) => e.stopPropagation()}>
                          <ProfileInformation 
                            user={user} 
                            favorites={favorites} 
                            onClose={closeProfile} />
                        </div>
                      </div>
                    )}
               </>
              </ProtectedRoute>
              }  
              />
              <Route 
              path="/classical-music-songs" 
              element={ 
              <>
                <ClassicalMusicSongs 
                  favorites={favorites}
                  onToggleFavorite={toggleFavorite}
                  isLoggedIn={isLoggedIn}
                />
              </>
              }>
             </Route>
             <Route path="/classical-music-artist" element={ <>
                    <ClassicalMusicArtist />
               </>} />
             <Route path="/jazz-music-songs" element={  
              <>
                  <JazzMusicSongs 
                    favorites={favorites}
                    onToggleFavorite={toggleFavorite}
                    isLoggedIn={isLoggedIn}
                 /> 
             </> 
            } />
             <Route path="/jazz-music-artist" element={ 
               <>
                    <JazzMusicArtist /> 
                  </>
                } 
                />
             <Route path="/nerdcore-music-songs" element={
               <> 
                    <NerdcoreMusicSongs 
                    favorites={favorites}
                    onToggleFavorite={toggleFavorite}
                    isLoggedIn={isLoggedIn}
                    /> 
               </>} 
               />
             <Route path="/nerdcore-music-artist" element={ 
              <>
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