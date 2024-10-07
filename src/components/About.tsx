import Img from '/project1.jpg'

const About = () => {
  return (
    <section id="about" className="about section" style={{ marginTop: '14px' }}>
      <div className="container">
        <div className="row align-items-center">

          <div className="col-lg-6 col-md-12" data-aos="fade-up">
            <div className="about-image">
              <img src={Img} alt="About Us Image" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
          </div>


          <div className="col-lg-6 col-md-12">
            <div className="about-content">
              <div data-aos="fade-up">
                <span className="sub-title">About Us</span>
                <h2>We Are Digital Explorers</h2>
                <p>
                  We believe brand interaction is key in communication. Real innovations and a positive customer experience are the
                  heart of successful communication. No fake products and services. The customer is king, their lives and needs are
                  the inspiration.
                </p>
              </div>

              <ul className="features-list">
                <li data-aos="fade-up">
                  <span><i className="fas fa-check"></i> Recommender Systems</span>
                </li>
                <li data-aos="fade-up">
                  <span><i className="fas fa-check"></i> Demand Prediction</span>
                </li>
                <li data-aos="fade-up">
                  <span><i className="fas fa-check"></i> Omnichannel Analytics</span>
                </li>
                <li data-aos="fade-up">
                  <span><i className="fas fa-check"></i> Lead Generation</span>
                </li>
                <li data-aos="fade-up">
                  <span><i className="fas fa-check"></i> Dedicated Developers</span>
                </li>
                <li data-aos="fade-up">
                  <span><i className="fas fa-check"></i> 24/7 Support</span>
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
                  Real innovations and a positive customer experience are the heart of successful communication.
                </p>
                <ul className="features-list">
                  <li><i className="bi bi-check"></i> Activate Listening</li>
                  <li><i className="bi bi-check"></i> Brilliant Minds</li>
                  <li><i className="bi bi-check"></i> Better. Best. Wow!</li>
                  <li><i className="bi bi-check"></i> Branding It Better!</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="about-text" data-aos="fade-up">
                <h3>Our Mission</h3>
                <p>
                  Real innovations and a positive customer experience are the heart of successful communication.
                </p>
                <ul className="features-list">
                  <li><i className="bi bi-check"></i> Creating Results</li>
                  <li><i className="bi bi-check"></i> Expect More</li>
                  <li><i className="bi bi-check"></i> Good Thinking</li>
                  <li><i className="bi bi-check"></i> In Real We Trust</li>
                </ul>
              </div>
            </div>


            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="about-text" data-aos="fade-up">
                <h3>Who We Are</h3>
                <p>
                  Real innovations and a positive customer experience are the heart of successful communication.
                </p>
                <ul className="features-list">
                  <li><i className="bi bi-check"></i> Stay Real. Always.</li>
                  <li><i className="bi bi-check"></i> We Have You Covered</li>
                  <li><i className="bi bi-check"></i> We Turn Heads</li>
                  <li><i className="bi bi-check"></i> Your Brand, Promoted</li>
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
