const Pricing = () => {
  return (
    <section id="pricing" className="pricing section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Pricing</h2>
        <p>
          Whether you're a small business looking to establish your online presence or a large enterprise requiring robust IT solutions, our packages are designed to deliver value and flexibility.
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">

          {/* Starter Package */}
          <div id="starter" className="col-lg-4" data-aos="zoom-in" data-aos-delay="100">
            <div className="pricing-item">
              <h3>Starter Package</h3>
              <h4><sup>KES</sup> 20,000<span></span></h4>
              <ul>
                <li><i className="bi bi-check"></i> <span>Responsive website with up to 5 pages</span></li>
                <li><i className="bi bi-check"></i> <span>Basic SEO optimization</span></li>
                <li><i className="bi bi-check"></i> <span>5 hours of monthly IT support</span></li>
                <li className="na"><i className="bi bi-x"></i> <span>Social media integration</span></li>
                <li className="na"><i className="bi bi-x"></i> <span>E-commerce functionality</span></li>
              </ul>
              <a href="#" className="buy-btn">Buy Now</a>
            </div>
          </div>

          {/* Growth Package */}
          <div id="growth" className="col-lg-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="pricing-item">
              <h3>Growth Package</h3>
              <h4><sup>KES</sup> 60,000</h4>
              <ul>
                <li><i className="bi bi-check"></i> <span>Responsive website with up to 10 pages</span></li>
                <li><i className="bi bi-check"></i> <span>Advanced SEO optimization</span></li>
                <li><i className="bi bi-check"></i> <span>10 hours of monthly IT support</span></li>
                <li><i className="bi bi-check"></i> <span>Social media integration</span></li>
                <li className="na"><i className="bi bi-x"></i><span>E-commerce functionality</span></li>
              </ul>
              <a href="#" className="buy-btn">Buy Now</a>
            </div>
          </div>

          {/* Enterprise Package */}
          <div id="enterprise" className="col-lg-4" data-aos="zoom-in" data-aos-delay="300">
            <div className="pricing-item">
              <h3>Enterprise Package</h3>
              <h4><sup>KES</sup> 100,000</h4>
              <ul>
                <li><i className="bi bi-check"></i> <span>Custom responsive website with unlimited pages</span></li>
                <li><i className="bi bi-check"></i> <span>Full SEO optimization with ongoing monitoring</span></li>
                <li><i className="bi bi-check"></i> <span>20 hours of monthly IT support</span></li>
                <li><i className="bi bi-check"></i> <span>Social media & CRM integration</span></li>
                <li><i className="bi bi-check"></i> <span>E-commerce functionality</span></li>
              </ul>
              <a href="#" className="buy-btn">Buy Now</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;
