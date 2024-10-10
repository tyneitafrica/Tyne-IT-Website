export function WebDev() {
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
              />
            </div>
          </div>
          <div className="overview-content">
            <div className="content right-content">
              <h2>Web Design &amp; Development</h2>
              <p>
                Our web design and development services are focused on creating
                visually striking, user-friendly websites that enhance your
                brand’s digital experience and drive customer engagement. We
                don’t just build websites; we craft digital platforms that are
                scalable, responsive, and tailored to your business objectives.
                With a deep understanding of the latest design trends and
                development frameworks, we ensure that your website performs
                seamlessly across all devices.
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
