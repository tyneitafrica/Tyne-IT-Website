export function Courses() {
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
              <h2>Vendor Management</h2>
              <p>
                we offer a wide range of courses designed to empower individuals
                and businesses with the technical skills needed to thrive in
                today’s digital world. Our expert-led courses cover essential
                topics like cybersecurity, cloud computing, software
                development, and IT infrastructure management. Whether you’re
                looking to upskill your team or advance your own career, our
                hands-on, practical training ensures you gain real-world
                knowledge that can be applied immediately.
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
              <div className="learning-courses mt-4">
                <h3>Learning Courses Samples</h3>
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <div className="card">
                      <img
                        src="/course1.jpg"
                        className="card-img-top"
                        alt="Course 1"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Cybersecurity Basics</h5>
                        <p className="card-text">
                          Learn the fundamentals of cybersecurity and protect
                          your digital assets.
                        </p>
                        <a href="#" className="btn btn-primary">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="card">
                      <img
                        src="/course2.jpg"
                        className="card-img-top"
                        alt="Course 2"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Cloud Computing</h5>
                        <p className="card-text">
                          Understand the basics of cloud computing and its
                          applications.
                        </p>
                        <a href="#" className="btn btn-primary">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="card">
                      <img
                        src="/course3.jpg"
                        className="card-img-top"
                        alt="Course 3"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Software Development</h5>
                        <p className="card-text">
                          Get started with software development and build your
                          first application.
                        </p>
                        <a href="#" className="btn btn-primary">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
