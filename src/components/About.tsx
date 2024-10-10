import Img from "/project1.jpg";

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
                style={{ maxWidth: "100%", height: "auto" }}
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
                    <i className="fas fa-check"></i> Recommender Systems
                  </span>
                </li>
                <li data-aos="fade-up">
                  <span>
                    <i className="fas fa-check"></i> Demand Prediction
                  </span>
                </li>
                <li data-aos="fade-up">
                  <span>
                    <i className="fas fa-check"></i> Omnichannel Analytics
                  </span>
                </li>
                <li data-aos="fade-up">
                  <span>
                    <i className="fas fa-check"></i> Lead Generation
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
                  commitment to solving real-world business challenges through
                  tailored IT services. Over time, we have expanded our
                  expertise, adding software development, IT support, and
                  procurement solutions to our portfolio. With a team of
                  dedicated professionals and a growing list of satisfied
                  clients, we continue to evolve, staying ahead of industry
                  trends and driving digital transformation for businesses of
                  all sizes.
                </p>
                <ul className="features-list">
                  <li>
                    <i className="bi bi-check"></i> Activate Listening
                  </li>
                  <li>
                    <i className="bi bi-check"></i> Brilliant Minds
                  </li>
                  <li>
                    <i className="bi bi-check"></i> Better. Best. Wow!
                  </li>
                  <li>
                    <i className="bi bi-check"></i> Branding It Better!
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
                    <i className="bi bi-check"></i> Creating Results
                  </li>
                  <li>
                    <i className="bi bi-check"></i> Expect More
                  </li>
                  <li>
                    <i className="bi bi-check"></i> Good Thinking
                  </li>
                  <li>
                    <i className="bi bi-check"></i> In Real We Trust
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="about-text" data-aos="fade-up">
                <h3>Who We Are</h3>
                <p>
                  Real innovations and a positive customer experience are the
                  heart of successful communication.
                </p>
                <ul className="features-list">
                  <li>
                    <i className="bi bi-check"></i> Stay Real. Always.
                  </li>
                  <li>
                    <i className="bi bi-check"></i> We Have You Covered
                  </li>
                  <li>
                    <i className="bi bi-check"></i> We Turn Heads
                  </li>
                  <li>
                    <i className="bi bi-check"></i> Your Brand, Promoted
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
