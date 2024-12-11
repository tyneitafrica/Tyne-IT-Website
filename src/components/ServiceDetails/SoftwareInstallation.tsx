export function SoftwareInstallation() {
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
                src="/software.jpeg"
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
              <h2>Software Installation</h2>
              <p>
                We offer reliable and efficient software installation services
                to ensure your systems are up and running smoothly. Our team
                handles everything from installation and configuration to
                troubleshooting, making sure that your software integrates
                seamlessly with your existing infrastructure.
              </p>
              <ul className="features-list list-unstyled">
                <li>
                  <i className="bi bi-patch-check-fill me-2"></i> Chatbot
                  integration
                </li>
                <li>
                  <i className="bi bi-patch-check-fill me-2"> </i> Database
                  Migration
                </li>
                <li>
                  <i className="bi bi-patch-check-fill me-2"></i> CRM
                  Integration
                </li>
                <li>
                  <i className="bi bi-patch-check-fill me-2"></i> API
                  Integration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
