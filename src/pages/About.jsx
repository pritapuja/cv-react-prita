import { useNavigate } from "react-router-dom"; 

function About() {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate("/experience"); 
  };

  return (
    <div>
      <section id="about">
        <div className="about-gap">
          <p className="section__text__p1">Get To Know More</p>
          <h1 className="title">About Me</h1>
          <div className="section-container">
            <div className="section__pic-container">
              <img
                src="/assets/prita.jpg"
                alt="Profile picture"
                className="about-pic"
              />
            </div>
            <div className="about-details-container">
              <div className="about-containers">
                <div className="details-container">
                  <img
                    src="/assets/experience.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <h3>Experience</h3>
                  <p>Internship <br />Programmer</p>
                </div>
                <div className="details-container">
                  <img
                    src="/assets/graduate.png"
                    alt="Education icon"
                    className="icon"
                  />
                  <h3>Education</h3>
                  <p>
                    Bachelor&apos;s degree (S1) <br />
                    Computer Science <br />
                    Sriwijaya University
                    <br />
                    GPA 3.51
                  </p>
                </div>
              </div>
              <div className="text-container">
                <p className="rata">
                  Fresh Graduate from Sriwijaya University with a major in
                  Informatics Engineering. Actively involved in the Informatics
                  Student Association as Information & Communication Staff and
                  in the Network Administrator Club as Curriculum Staff.
                  Proficient in Web Development technologies, including Git,
                  HTML, CSS, Bootstrap, JavaScript, PHP, Python, MySQL,
                  CodeIgniter, and Django. Aspiring to pursue a career as a
                  Frontend Web Developer.
                </p>
              </div>
            </div>
          </div>
          <img
            src="/assets/arrow.png"
            alt="Arrow icon"
            className="icon arrow"
            onClick={handleClick}
          />
        </div>
      </section>
    </div>
  );
}

export default About;
