import "./About.css";

const About = () => {
  return (
    <>
      <div className="main_content">
        <div className="about_container shadow_component">
          <p>Welcome to our Bug Tracker!</p>
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
            <li>Searching and filtering bug reports</li>
          </ul>
          <p>
            Our goal is to provide you with a user-friendly and efficient tool
            for managing software bugs in your projects.
          </p>
          <p>
            If you have any feedback or suggestions, please feel free to contact
            us.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
