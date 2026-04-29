// #Image imports
import musicDrums from "../../assets/images/drums_image.jpeg";
import musicNotation from "../../assets/images/music_notation.jpg";

// #CSS imports
import "./Main.css";

function Main() {
  return (
    <main className="main">
        <img
          className="main__music_image"
          src={musicDrums}
          alt="Drumset_Image"
        />
        <p className="main__info_text">
          Classical, jazz, and nerdcore music each bring unique flavors to the listening world, spanning centuries of tradition, spontaneous energy, and modern subculture. Classical music, born from European roots in the Medieval era and peaking through Baroque masters like Bach, Classical innovators like Mozart, and Romantic giants like Beethoven, revolves around meticulously crafted symphonies, concertos, and sonatas that build emotional narratives through intricate harmonies, counterpoint, and orchestral grandeur. Jazz, emerging in early 20th-century New Orleans from African American communities, flips the script with its emphasis on improvisation, syncopated swing rhythms, blue notes, and call-and-response interplay among instruments like trumpet, saxophone, piano, bass, and drums—turning a simple head into an ever-evolving conversation where each performance feels alive and unrepeatable. Nerdcore, a hip-hop offshoot from the internet age, channels rap's beats, flows, and wordplay into "geek" obsessions like video games, programming, sci-fi, comics, and fandoms, creating anthems for outsiders who celebrate niche passions in DIY tracks shared across online communities. From classical's timeless architecture to jazz's raw creativity and nerdcore's witty introspection, these genres prove music's power to capture everything from profound emotion to playful intellect.
        </p>
        <img className="main__music_notation" src={musicNotation} alt="Music Notes" />
    </main>
  );
}

export default Main;
