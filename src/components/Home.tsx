import heroImg from "../assets/img/hero-img.png";

import Contact from "./child-components/Contact";
import { CountriesWeWork } from "./child-components/CountriesWeWork";
import HomeAbout from "./child-components/HomeAbout";
import { Partners } from "./child-components/Partners";
import ProjectsCount from "./child-components/ProjectsCount";
import Team from "./child-components/Team";
import Testimonials from "./child-components/Testimonials";


export const Home = () => {


    return (
        <>
            <section id="hero" className="hero section dark-background">
                <div className="container">
                    <div className="row gy-4">
                        <div
                            className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center"
                            data-aos="zoom-out"
                        >
                            <h1>Innovative Solutions for Your Business Growth</h1>
                            <p>
                                We are a team of skilled web developers crafting solutions that
                                drive your business forward using modern technology.
                            </p>
                            <div className="d-flex">
                                <a href="#about" className="btn-get-started">
                                    Get Started
                                </a>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 order-1 order-lg-2 hero-img"
                            data-aos="zoom-out"
                            data-aos-delay="100"
                        >
                            <img src={heroImg} className="img-fluid animated" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <ProjectsCount/>
            <Partners/>
            <HomeAbout/>
            <Testimonials/>
            <Team/>
            <CountriesWeWork/>
            <Contact/>
        </>


    );
};
