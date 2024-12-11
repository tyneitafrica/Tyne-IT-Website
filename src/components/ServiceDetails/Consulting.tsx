export function Consulting() {
  return (
    <section
      id="service-details"
      className="section"
      style={{ marginTop: "90px" }}
    >
      <div className="container">
        <div className="overview-box it-overview d-flex align-items-center">
          <div className="overview-image">
            <div className="image">
              <img
                src="/it-service2.png"
                alt="Web Design & Development"
                className="img-fluid"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "3%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
          <div className="overview-content">
            <div className="content right-content">
              <h2>IT consulting</h2>
              <p>
                We provide comprehensive IT solutions designed to help
                businesses streamline their operations and achieve growth. Our
                team specializes in offering expert advice, implementation, and
                support tailored to your unique needs. Whether you're looking to
                enhance your infrastructure, improve security, or optimize your
                digital platforms, we ensure that technology becomes a powerful
                asset for your business.
              </p>
              <ul className="features-list list-unstyled">
                <li>
                  <i className="bi bi-patch-check-fill me-2"></i> Technology
                  Roadmapping
                </li>
                <li>
                  <i className="bi bi-patch-check-fill me-2"> </i> Cost
                  Optimization
                </li>
                <li>
                  <i className="bi bi-patch-check-fill me-2"></i> Digital
                  Optimization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
