export function OEM() {
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
              <h2>OEM Reseller services</h2>
              <p>
                We offer comprehensive OEM reseller services, providing
                businesses with access to high-quality, original equipment
                manufacturer (OEM) products. As an authorized reseller, we help
                you source the latest hardware and software solutions directly
                from leading manufacturers at competitive prices.
              </p>
              <ul className="features-list list-unstyled">
                <li>
                  <i className="bi bi-patch-check-fill me-2"></i> Responsive
                  Design
                </li>
                <li>
                  <i className="bi bi-patch-check-fill me-2"></i> UI / UX Design
                </li>
                <li>
                  <i className="bi bi-patch-check-fill me-2"></i> Cross-Platform
                  Development
                </li>
                <li>
                  <i className="bi bi-patch-check-fill me-2"></i> ative App
                  Development
                </li>
                <li>
                  <i className="bi bi-patch-check-fill me-2"></i> React Native
                  Development
                </li>
                <li>
                  <i className="bi bi-patch-check-fill me-2"></i> Flutter
                  Development
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
