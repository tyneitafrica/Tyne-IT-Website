import Pricing from "./child-components/Pricing";
import { Link } from "react-router-dom";

export const Services = () => {
  return (
    <section
      id="services"
      className="services section light-background"
      style={{ marginTop: "90px" }}
    >
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>
          Our expertise and personalized approach ensure that your unique
          business needs are met efficiently and effectively
        </p>
      </div>

      <div className="container">
        <div className="row justify-content-center gy-4">
          <div
            className="col-xl-4 col-md-6 d-flex"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-window-fullscreen"></i>
              </div>
              <h4>
                <Link to="/services/web-dev" className="">
                  Web Development
                </Link>
              </h4>
              <p>
                Our web design and development services are focused on creating
                visually striking, user-friendly websites that enhance your
                brand’s digital experience and drive customer engagement.
              </p>
              <Link
                to="/services/web-dev"
                className="read-more"
              >
                <span>Read More</span>
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>

          <div
            className="col-xl-4 col-md-6 d-flex"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-pencil-square"></i>
              </div>
              <h4>
                <a href="" className="">
                  {" "}
                  UI/UX Design
                </a>
              </h4>
              <p>
                Intuitive UI/UX design that enhances user satisfaction through
                thoughtful, user-centered design and clear navigation.
              </p>
              <Link to="/services/service1" className="read-more">
                <span>Read More</span>
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>

          <div
            className="col-xl-4 col-md-6 d-flex"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-person-fill-gear"></i>
              </div>
              <h4>
                <a href="" className="">
                  Maintenance
                </a>
              </h4>
              <p>
                24/7 technical support and proactive maintenance to ensure your
                IT systems are always up and running smoothly.
              </p>
              <Link to="/services/service1" className="read-more">
                <span>Read More</span>
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>

          <div
            className="col-xl-4 col-md-6 d-flex"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-rocket-takeoff"></i>
              </div>
              <h4>
                <a href="" className="">
                  Optimization
                </a>
              </h4>
              <p>
                Optimize your website with our service for blazing-fast
                performance, top-tier SEO, enhanced user experience, and
                improved discoverability, turning visitors into loyal customers.
              </p>
              <Link to="/services/service1" className="read-more">
                <span>Read More</span>
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>

          <div
            className="col-xl-4 col-md-6 d-flex"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-people-fill"></i>
              </div>
              <h4>
                <a href="" className="">
                  IT consulting
                </a>
              </h4>
              <p>
                Strategic IT consulting to help businesses innovate, optimize
                processes, and align technology with their goals.
              </p>
              <Link to="/services/service1" className="read-more">
                <span>Read More</span>
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>

          <div
            className="col-xl-4 col-md-6 d-flex"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-motherboard-fill"></i>
              </div>
              <h4>
                <a href="" className="">
                  Software Development
                </a>
              </h4>
              <p>
                Custom software solutions developed to meet the unique needs of
                your business, from enterprise applications to specialized
                tools.
              </p>
              <Link to="/services/service1" className="read-more">
                <span>Read More</span>
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>

          <div
            className="col-xl-4 col-md-6 d-flex"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-airplane"></i>
              </div>
              <h4>
                <a href="" className="">
                  Web deployment
                </a>
              </h4>
              <p>
                Choose from top deployment platforms like Vercel, Netlify, or
                Render, and let us handle the rest. Our deployment service takes
                care of setting up, configuring, and managing your site on your
                selected platform, ensuring a smooth and efficient launch."
              </p>
              <Link to="/services/service1" className="read-more">
                <span>Read More</span>
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>

          <div
            className="col-xl-4 col-md-6 d-flex"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-database-fill-gear"></i>
              </div>
              <h4>
                <a href="" className="">
                  Database Management
                </a>
              </h4>
              <p>
                We handle setup, optimization, and maintenance to ensure your
                databases are secure, fast, and scalable, so you can focus on
                leveraging your data for growth
              </p>
              <Link to="/services/service1" className="read-more">
                <span>Read More</span>
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Pricing />
    </section>
  );
};
