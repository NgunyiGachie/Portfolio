import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import apiSnippet from "../assets/img/api-snippet.png"; // Replace with an actual screenshot of your dashboard
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "EC2 Cost Optimization Dashboard",
      description: "An interactive dashboard that analyzes resource utilization, network throughput, and cost-efficiency of an Amazon EC2 instance using real CloudWatch metrics. Built for FinOps insights within AWS Free Tier.",
      imgUrl: apiSnippet,
      projectLink: "https://github.com/NgunyiGachie/ec2-cost-optimization-dashboard",
    },
    // You can add more projects here
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>
                    Explore selected projects where I merge cloud infrastructure expertise with economic insights.
                    These works reflect my FinOps practice — measuring usage, uncovering inefficiencies, and optimizing cloud spend with data.
                  </p>
                  <Row>
                    {projects.map((project, index) => (
                      <Col key={index} xs={12} sm={6} md={4} className="mb-4">
                        <ProjectCard {...project} />
                      </Col>
                    ))}
                  </Row>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background decoration" />
    </section>
  );
};
