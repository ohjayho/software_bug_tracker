import Header from "./Header";
import "./About.css";

const About = () => {
  return (
    <>
      <Header />
      <div className="about_container">
        <h1>Software Bug Tracker</h1>
        <p>
          This is a Software Bug Tracker, which tracks all the bugs existing in
          this world.<br></br> Why do I need to use this bug tracker? <br></br>-
          You tell me. There must be the reason why you end up here.<br></br>
          How are you?<br></br>- I think I'm fine. and you?<br></br>So so.
          <br></br>- Cool.
        </p>
      </div>
    </>
  );
};

export default About;
