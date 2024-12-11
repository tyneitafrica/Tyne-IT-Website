export function MobileApp() {
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
                src="/mobile.jpeg"
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
              <h2>Mobile App Development</h2>
              <p>
                Our mobile app development services are designed to create
                intuitive, high-performance applications that meet the unique
                needs of your business and enhance user experiences. We leverage
                the latest technologies and industry best practices to deliver
                custom mobile applications that seamlessly integrate with your
                business operations.
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
