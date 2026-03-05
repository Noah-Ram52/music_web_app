// #CSS
import "./App.css";

// #React
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

// #Components
import Header from "../Header/Header";
import MenuMusicGenre from "../MenuMusicGenre/MenuMusicGenre";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";

function App() {
  // #State for toggling the music genre menu
  // toggleMusicGenre flips it between false and true
  const [isMusicGenreOpen, setIsMusicGenreOpen] = useState(false);
  const toggleMusicGenre = () =>
    setIsMusicGenreOpen((toggleGenre) => !toggleGenre);

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
                    <Header onMusicToggle={toggleMusicGenre} />
                    {isMusicGenreOpen && (
                      <MenuMusicGenre isMenuOpen={isMusicGenreOpen} />
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
