export function Procurement() {
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
              <h2>IT procurement</h2>
              <p>
                we provide comprehensive procurement services to help your
                business acquire the right technology solutions with efficiency
                and cost-effectiveness. Our procurement team specializes in
                sourcing hardware, software, and IT services that align with
                your business needs and budget.
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
