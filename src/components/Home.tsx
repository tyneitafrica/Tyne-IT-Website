import heroImg from "/logo2.jpeg";

import Contact from "./child-components/Contact";
import { CountriesWeWork } from "./child-components/CountriesWeWork";
import HomeAbout from "./child-components/HomeAbout";
import { Partners } from "./child-components/Partners";
import ProjectsCount from "./child-components/ProjectsCount";
// import Team from "./child-components/Team";
import Testimonials from "./child-components/Testimonials";

export const Home = () => {
  return (
    <>
      <section id="hero" className="hero section dark-background" style={{backgroundImage:`url(${heroImg})`,backgroundRepeat:'no-repeat'}}>
        <div className="container">
          <div className="row gy-4">
            <div
              className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center"
              data-aos="zoom-out"
            >
              <h1>Intelligent Tech Solutions for Innovation </h1>
              <p>
                Empowering businesses across all sectors with expert IT
                services, tailored software development and comprehensive IT
                solutions to drive success.
              </p>
              <div className="d-flex">
                <a href="#contact" className="btn-get-started">
                  Partner With Us
                </a>
              </div>
            </div>
            <div
              className="col-lg-6 order-1 order-lg-2 hero-img"
              data-aos="zoom-out"
              data-aos-delay="100"
            >
              {/* <img src={heroImg} className="img-fluid animated" alt="" /> */}
            </div>
          </div>
        </div>
      </section>
      <HomeAbout />
      <ProjectsCount />
      <Partners />
      <Testimonials />
      {/* <Team/> */}
      <CountriesWeWork />
      <Contact />
    </>
  );
};
