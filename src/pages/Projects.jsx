import { Link, useNavigate } from 'react-router-dom';

function Projects() {
    const projects = [
        {
            title: "Movie App with React Native + TypeScript",
            imgSrc: "./assets/movieapp.jpeg",
            githubLink: "https://github.com/pritapuja/movieApp"
        },
        {
            title: "Weather App with React Native",
            imgSrc: "./assets/cuaca.jpeg",
            githubLink: "https://github.com/pritapuja/react-weatherApp"
        },
        {
            title: "Prediction of Drinkers using Body Signals",
            imgSrc: ["./assets/drinker1.png", "./assets/drinker2.png"],
            githubLink: "https://github.com/pritapuja/Prediction-of-Drinkers-using-Body-Signals"
        },
        {
            title: "Ecommerce Django",
            imgSrc: ["./assets/ecom1.png", "./assets/ecom2.png", "./assets/ecom3.png"],
            githubLink: "https://github.com/pritapuja/ecomm_django"
        },
        {
            title: "Digit Recognition in Digital Prayer Beads Image",
            imgSrc: "./assets/tasbih.png",
            githubLink: "https://github.com/pritapuja/DPB_Recognition"
        },
        {
            title: "Digital Creative Management System",
            imgSrc: ["./assets/digimen.png", "./assets/digimen2.png"],
            githubLink: "https://github.com/pritapuja/ci4projek"
        }
    ];

    const navigate = useNavigate();

    return ( 
        <div>
            <section id="projects">
                <p className="section__text__p1">Browse My Recent</p>
                <h1 className="title">Projects</h1>
                <div className="experience-details-container">
                    <div className="about-containers">
                        {projects.map((project, index) => (
                            <div key={index} className="details-container color-container">
                                <div className="article-container">
                                    {Array.isArray(project.imgSrc) ? (
                                        project.imgSrc.map((src, imgIndex) => (
                                            <img
                                                key={imgIndex}
                                                src={src}
                                                alt={`Project ${index + 1}`}
                                                className="project-img"
                                            />
                                        ))
                                    ) : (
                                        <img
                                            src={project.imgSrc}
                                            alt={`Project ${index + 1}`}
                                            className="project-img"
                                        />
                                    )}
                                </div>
                                <h2 className="experience-sub-title project-title">
                                    {project.title}
                                </h2>
                                <div className="btn-container">
                                    <Link
                                        to={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-color-2 project-btn"
                                    >
                                        Github
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <img
                    src="./assets/arrow.png"
                    alt="Arrow icon"
                    className="icon arrow"
                    onClick={() => navigate('/contact')}
                />
            </section>
        </div>
    );
}

export default Projects;
