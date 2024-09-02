import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>
                          I am skilled in creating and managing web applications with a strong focus on backend development, database management, and API integration. My expertise also includes deploying applications to the cloud and ensuring security best practices are followed.
                        </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Backend Development" />
                                <h5>Backend Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Web Development" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Database Management" />
                                <h5>Database Management</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="API Development" />
                                <h5>API Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Cloud Deployment" />
                                <h5>Cloud Deployment</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Security Best Practices" />
                                <h5>Security Best Practices</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Performance Optimization" />
                                <h5>Performance Optimization</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Version Control" />
                                <h5>Version Control</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Background Image" />
    </section>
  );
}
