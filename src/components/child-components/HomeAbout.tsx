import { Link } from "react-router-dom";
import Img from "/aboutus.jpeg";

const HomeAbout = () => {
  const readMoreStyle = {
    display: "inline-flex",
    alignItems: "center",
    padding: "12px 25px",
    backgroundColor: "#0066cc",
    color: "white",
    fontSize: "16px",
    fontWeight: "600",
    borderRadius: "30px",
    textDecoration: "none",
    transition: "background-color 0.3s ease, transform 0.3s ease",
    marginTop: "20px",
  };

  const readMoreHoverStyle = {
    backgroundColor: "#004d99",
    transform: "translateY(-5px)",
  };

  const readMoreIconStyle = {
    marginLeft: "8px",
    fontSize: "18px",
    transition: "margin-left 0.3s ease",
  };

  const readMoreIconHoverStyle = {
    marginLeft: "12px",
  };

  return (
    <section id="about" className="about section" style={{ marginTop: "65px" }}>
      <div className="container">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>About Us</h2>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12" data-aos="fade-up">
            <div className="about-image">
              <img
                src={Img}
                alt="About Us Image"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "3%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="about-content">
              <div data-aos="fade-up">
                <h2>We Are Digital Explorers</h2>
                <p>
                  Tyne Africa IT Consulting is a premier IT services and
                  solutions provider, specializing in delivering customized
                  software development, IT Support, and procurement solutions
                  for businesses across the globe. Our dedicated team consists
                  of experienced developers, innovative IT professionals, and
                  creative problem-solvers who have successfully delivered
                  impactful digital solutions for various industry sectors. With
                  a close-knit team of software engineers, IT Consultants Tyne
                  Africa is more than just a technology provider. We are a
                  trusted partner committed to helping businesses overcome their
                  unique challenges. Our passion for innovation and niche-gaps
                  drives us to transform ideas into digital experiences.
                </p>
              </div>

              <ul className="features-list">
                <li data-aos="fade-up">
                  <span>
                    <i className="fas fa-check"></i> Innovative IT Solutions
                  </span>
                </li>
                <li data-aos="fade-up">
                  <span>
                    <i className="fas fa-check"></i> Strategic IT Consulting
                  </span>
                </li>
                <li data-aos="fade-up">
                  <span>
                    <i className="fas fa-check"></i> Bridging Innovation and
                    Insight
                  </span>
                </li>
                <li data-aos="fade-up">
                  <span>
                    <i className="fas fa-check"></i> Client-Centric Approach
                  </span>
                </li>
                <li data-aos="fade-up">
                  <span>
                    <i className="fas fa-check"></i> Dedicated Developers
                  </span>
                </li>
                <li data-aos="fade-up">
                  <span>
                    <i className="fas fa-check"></i> 24/7 Support
                  </span>
                </li>
              </ul>

              {/* Read More Button */}
              <div style={{ textAlign: "center", marginTop: "30px" }}>
                <Link
                  to="/about"
                  style={readMoreStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      readMoreHoverStyle.backgroundColor;
                    e.currentTarget.style.transform =
                      readMoreHoverStyle.transform;
                    const icon = e.currentTarget.querySelector("i");
                    if (icon) {
                      icon.style.marginLeft = readMoreIconHoverStyle.marginLeft;
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor =
                      readMoreStyle.backgroundColor;
                    e.currentTarget.style.transform = "";
                    const icon = e.currentTarget.querySelector("i");
                    if (icon) {
                      icon.style.marginLeft = readMoreIconStyle.marginLeft;
                    }
                  }}
                >
                  <span>Read More</span>
                  <i
                    className="bi bi-arrow-right"
                    style={readMoreIconStyle}
                  ></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
