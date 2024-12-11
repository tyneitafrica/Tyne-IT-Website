export function ServiceDetails() {
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
              <h2>Web Design &amp; Development</h2>
              <p>
                We believe brand interaction is key to communication. Real
                innovations and positive customer experience are the heart of
                success.
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
                  <i className="bi bi-patch-check-fill me-2"></i> Mobile App
                  Development
                </li>
                <li>
                  <i className="bi bi-patch-check-fill me-2"></i> Laravel
                  Development
                </li>
                <li>
                  <i className="bi bi-patch-check-fill me-2"></i> React
                  Development
                </li>
                <li>
                  <i className="bi bi-patch-check-fill me-2"></i> Angular
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
