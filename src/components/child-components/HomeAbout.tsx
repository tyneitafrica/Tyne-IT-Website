import { Link } from "react-router-dom";

const HomeAbout = () => {
  return (
    <section
      id="about"
      className="about section light-background"
      style={{ marginTop: "14px" }}
    >
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>About Us</h2>
      </div>
      {/* End Section Title */}

      <div className="container">
        <div className="row gy-4">
          <div
            className="col-lg-6 content"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <p>
              Tyne Africa IT Consulting is a premier IT services and solutions
              provider, specializing in delivering customized software
              development, IT Support and procurement solutions for businesses
              across the globe. Our dedicated team consists of experienced
              developers, innovative IT professionals, and creative
              problem-solvers who have successfully delivered impactful digital
              solutions for various industry sectors.
            </p>
            <ul>
              <li>
                <i className="bi bi-check2-circle"></i>{" "}
                <span>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </span>
              </li>
              <li>
                <i className="bi bi-check2-circle"></i>{" "}
                <span>
                  Duis aute irure dolor in reprehenderit in voluptate velit.
                </span>
              </li>
              <li>
                <i className="bi bi-check2-circle"></i>{" "}
                <span>Ullamco laboris nisi ut aliquip ex ea commodo</span>
              </li>
            </ul>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="0">
            <p>
              With a close-knit team of software engineers, IT Consultants Tyne
              Africa is more than just a technology provider. We are a trusted
              partner committed to helping businesses overcome their unique
              challenges. Our passion for innovation and niche-gaps drives us to
              transform ideas into digital experiences.
            </p>
            <Link to="/about" className="read-more">
              <span>Read More</span>
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
