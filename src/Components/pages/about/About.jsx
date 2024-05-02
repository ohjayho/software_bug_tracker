import "./About.css";

const About = () => {
  return (
    <>
      <div className="about_container">
        <div className="about_content border_shadow_component">
          <div className="img_container_about">
            <div className="img_about"></div>
          </div>
          <div className="text_content_about">
            <h1>Welcome to Software Bug Tracker!</h1>
            <p>
              Our Bug Tracker is designed to help you manage and track software
              bugs effectively.
            </p>
            <p>Features include:</p>
            <ul>
              <li>Creating new bug reports</li>
              <li>Assigning bug reports to team members</li>
              <li>Tracking the status of bug reports</li>
              <li>Commenting and discussing bug reports</li>
            </ul>
            <p>
              Our goal is to provide you with a user-friendly and efficient tool
              for managing software bugs in your projects.
            </p>
            <p>
              If you have any feedback or suggestions, please feel free to
              contact us.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
