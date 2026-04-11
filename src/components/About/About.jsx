// #CSS
import "./About.css";

// #Components


function About() {
  return (
    <section>
      <div className="about">
        <p className="about__info">
          All of the genres have developed over time. Make sure to support all
          the genres of music. If you need to contact me, you can email me at
          <a className="about__contact_info" href="mailto:merawe481@gmail.com">
            {" "}
            merawe481@gmail.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}

export default About;
