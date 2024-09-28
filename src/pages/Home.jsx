import { Link } from 'react-router-dom';

function Home() {
    const handleDownloadCV = () => {
        window.open('/assets/pritapujaastuti_cv.pdf', '_blank');
    };

    const handleLinkedInClick = () => {
        window.open('https://linkedin.com/in/pritapujaastuti', '_blank');
    };

    const handleGitHubClick = () => {
        window.open('https://github.com/pritapuja', '_blank');
    };

    return (
        <div>
            <section id="profile">
                <div className="section__pic-container">
                    <img
                        className="imgProfile"
                        src="/assets/priti2.jpg"
                        alt="Prita Puja Astuti profile picture"
                    />
                </div>
                <div className="section__text">
                    <p className="section__text__p1">Hello, I&apos;m</p>
                    <h1 className="title">Prita Puja Astuti</h1>
                    <p className="section__text__p2">Programmer</p>
                    <div className="btn-container">
                        <Link
                            onClick={handleDownloadCV}
                            className="btn btn-color-2"
                        >
                            Download CV
                        </Link>
                        <Link
                            to="/contact"
                            className="btn btn-color-1"
                        >
                            Contact Info
                        </Link>
                    </div>
                    <div id="socials-container">
                        <img
                            src="/assets/linkedin.png"
                            alt="My LinkedIn profile"
                            className="icon"
                            onClick={handleLinkedInClick}
                        />
                        <img
                            src="/assets/github.png"
                            alt="My Github profile"
                            className="icon"
                            onClick={handleGitHubClick}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
