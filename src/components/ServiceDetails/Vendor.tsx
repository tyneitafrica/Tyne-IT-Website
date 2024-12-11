export function VendorManagement() {
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
              <h2>Vendor Management</h2>
              <p>
                Our vendor management services are designed to help businesses
                effectively manage and streamline their relationships with
                third-party vendors. We assist in vendor selection, negotiation,
                and performance monitoring to ensure you get the best value from
                your partnerships.
              </p>
              <ul className="features-list list-unstyled">
                <li>
                  <i className="bi bi-patch-check-fill me-2"></i> Performance
                  Monitoring
                </li>
                <li>
                  <i className="bi bi-patch-check-fill me-2"> </i> Vendor
                  Selection
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
