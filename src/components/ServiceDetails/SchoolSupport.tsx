export function SchoolSupport() {
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
              <h2>IT support for schools</h2>
              <p>
                We provide specialized IT solutions designed to enhance the
                learning environment and streamline administrative tasks. Our
                team understands the unique technology needs of educational
                institutions, from managing student information systems to
                ensuring secure and reliable networks for teachers and students.
              </p>
              <ul className="features-list list-unstyled">
                <li>
                  <i className="bi bi-patch-check-fill me-2"></i> Hardware and
                  software supportRoadmapping
                </li>
                <li>
                  <i className="bi bi-patch-check-fill me-2"> </i> Network
                  Management
                </li>
                <li>
                  <i className="bi bi-patch-check-fill me-2"></i> Data Backup &
                  Recovery
                </li>
                <li>
                  <i className="bi bi-patch-check-fill me-2"></i> Cyber security
                  solutions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
