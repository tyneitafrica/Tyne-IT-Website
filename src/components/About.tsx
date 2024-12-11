import Img from "/aboutus.jpeg";

const About = () => {
  return (
    <section id="about" className="about section" style={{ marginTop: "65px" }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12" data-aos="fade-up">
            <div className="about-image">
              <img
                src={Img}
                alt="About Us Image"
                style={{ maxWidth: "100%", height: "auto", borderRadius: "3%", objectFit: "cover" }}
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="about-content">
              <div data-aos="fade-up">
                <span className="sub-title">About Us</span>
                <h2>We Are Digital Explorers</h2>
                <p>
                  Tyne Africa IT Consulting is a premier IT services and
                  solutions provider, specializing in delivering customized
                  software development, IT Support and procurement solutions for
                  businesses across the globe. Our dedicated team consists of
                  experienced developers, innovative IT professionals, and
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
            </div>
          </div>
        </div>

        <div className="about-inner-area">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="about-text" data-aos="fade-up">
                <h3>Our History</h3>
                <p>
                  Founded with a vision to deliver innovative IT solutions;
                  TyneIT Consulting has grown from a small tech startup into a
                  trusted IT partner for businesses across various industries.
                  Our journey began with a passion for technology and a
                  commitment to solve real-world business challenges.
                </p>
                <ul className="features-list">
                  <li>
                    <i className="bi bi-check"></i> Founding with a vision for
                    Innovation
                  </li>
                  <li>
                    <i className="bi bi-check"></i> Expanding Global Presence
                  </li>
                  <li>
                    <i className="bi bi-check"></i> Trusted Partner for IT
                    Solutions
                  </li>
                  <li>
                    <i className="bi bi-check"></i> Continuous Growth and
                    Evolution
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="about-text" data-aos="fade-up">
                <h3>Our Mission</h3>
                <p>
                  Our mission is to provide reliable, forward-thinking solutions
                  that not only meet the demands of today but also prepare
                  businesses for the future. From software development to IT
                  support and procurement solutions, we’re here to help you
                  transform your operations and stay ahead of the competition.
                </p>
                <ul className="features-list">
                  <li>
                    <i className="bi bi-check"></i> Empowering Business Through
                    Technology
                  </li>
                  <li>
                    <i className="bi bi-check"></i> Delivering Innovative IT
                    Solutions
                  </li>
                  <li>
                    <i className="bi bi-check"></i> Fostering Long-Term Client
                    Success
                  </li>
                  <li>
                    <i className="bi bi-check"></i> Driving Digital
                    Transformation
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="about-text" data-aos="fade-up">
                <h3>Who We Are</h3>
                <p>
                  TyneIT Consulting is a leading IT consulting firm, providing
                  innovative solutions that help businesses thrive in today’s
                  digital landscape. We specialize in custom software
                  development, IT support, and business analytics, working
                  closely with clients to deliver results that drive growth and
                  efficiency.
                </p>
                <ul className="features-list">
                  <li>
                    <i className="bi bi-check"></i> Trusted IT Consulting
                    Partner
                  </li>
                  <li>
                    <i className="bi bi-check"></i> Experts in Digital
                    Transformation
                  </li>
                  <li>
                    <i className="bi bi-check"></i> Dedicated to Innovation and
                    Growth
                  </li>
                  <li>
                    <i className="bi bi-check"></i> Tailored Solutions for Every
                    Business
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
