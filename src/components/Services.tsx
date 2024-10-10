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
          At TyneIT Consulting, we offer a comprehensive range of IT solutions
          tailored to meet the unique needs of businesses across various
          industries. From cutting-edge software development to reliable IT
          support and strategic consulting, our services are designed to empower
          your business through technology. We partner with you to deliver
          scalable, efficient, and innovative solutions that drive success in a
          rapidly evolving digital world.
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
              <Link to="/services/web-dev" className="read-more">
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
                  OEM reseller services
                </a>
              </h4>
              <p>
                At TyneIT Consulting, we specialize in providing comprehensive
                OEM reseller services that empower businesses to expand their
                product offerings and enhance their market presence.
              </p>
              <Link to="/services/oem-reseller" className="read-more">
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
                  Data Analytics
                </a>
              </h4>
              <p>
                Our data analytics services empower your business with
                actionable insights. We help you transform raw data into
                meaningful information, enabling informed decision-making and
                driving strategic growth.
              </p>
              <Link to="/services/data-analytics" className="read-more">
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
                <Link to="/services/it-consulting" className="">
                  IT consulting
                </Link>
              </h4>
              <p>
                Our IT consulting services help businesses harness the power of
                technology to achieve their strategic goals. We provide expert
                advice, tailored solutions, and strategic insights.
              </p>
              <Link to="/services/it-consulting" className="read-more">
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
                <Link to="/sercives/outsourcing" className="">
                  Outsourcing Services
                </Link>
              </h4>
              <p>
                We connect you with skilled professionals, enabling you to focus
                on core business activities while reducing costs and increasing
                efficiency.
              </p>
              <Link to="/sercives/outsourcing" className="read-more">
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
                <Link to="/services/e-commerce" className="">
                  E-commerce
                </Link>
              </h4>
              <p>
                We design and develop robust e-commerce platforms that
                streamline online transactions and enhance customer experiences.
              </p>
              <Link to="/services/ecommerce-dev" className="read-more">
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
                <Link to="./services/mobile-dev" className="">
                  Mobile Dev
                </Link>
              </h4>
              <p>
                We handle setup, optimization, and maintenance to ensure your
                databases are secure, fast, and scalable, so you can focus on
                leveraging your data for growth
              </p>
              <Link to="/services/mobile-dev" className="read-more">
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
                <Link to="./services/equipment-leasing" className="">
                  IT Equipment Leasing
                </Link>
              </h4>
              <p>
                Our IT equipment leasing services provide businesses with
                flexible access to the latest technology without the upfront
                investment. Enhance your operations with cost-effective
                solutions that scale with your needs.
              </p>
              <Link to="/services/equiment-leasing" className="read-more">
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
