// #Image imports
import musicDrums from "../../assets/images/drums_image.jpg";
import musicNotation from "../../assets/images/music_notation.jpg";

// #CSS imports
import "./Main.css";

function Main() {
  return (
    <main>
      <div className="main">
        <img
          className="main__music_image"
          src={musicDrums}
          alt="Drumset_Image"
        />
        <p className="main__info_text">
          Classic rock, jazz, and alternative rock are deeply linked through
          their shared spirit of innovation and expression. Classic rock,
          emerging in the 1960s and ’70s, built its identity around electric
          guitars, energetic drumming, and bold vocals, creating a sound that
          defined a generation. Jazz, which predates it, laid much of the
          groundwork by emphasizing improvisation, rhythmic complexity, and
          emotional storytelling through instruments like the saxophone and
          trumpet. Many rock musicians drew inspiration from jazz’s freedom and
          creativity, blending its techniques into their own style. Decades
          later, alternative rock carried that same exploratory mindset,
          breaking away from mainstream rock conventions with experimental
          sounds, poetic lyrics, and diverse influences from punk to electronic
          music. Together, these genres form a continuous musical
          conversation—each one borrowing from the last, evolving while keeping
          the raw drive to express something new and genuine.
        </p>
        <img className="main__music_notation" src={musicNotation} alt="" />
      </div>
    </main>
  );
}

export default Main;
