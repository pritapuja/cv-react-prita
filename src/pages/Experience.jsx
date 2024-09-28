import { useNavigate } from "react-router-dom";

function Experience() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/projects");
  };

  return (
    <div>
      <section id="experience">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Skills</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container">
              <div className="article-container">
                <article>
                  <img
                    src="/assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Git</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src="/assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>PHP</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src="/assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>HTML</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src="/assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Python</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src="/assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>CSS</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src="/assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Javascript</h3>
                    <p>Basic</p>
                  </div>
                </article>
              </div>
            </div>
            <div className="details-container">
              <div className="article-container">
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>MySQL</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>CodeIgniter</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Django</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Ms Office</h3>
                    <p>Basic</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        <img
          src="./assets/arrow.png"
          alt="Arrow icon"
          className="icon arrow"
          onClick={handleClick}
        />
      </section>
    </div>
  );
}

export default Experience;
