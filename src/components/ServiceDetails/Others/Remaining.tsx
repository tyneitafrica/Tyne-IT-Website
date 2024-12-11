import { Service } from "./services";
export function Remaining({service}: {service: Service}) {
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
                  src="/software-mgt.jpeg"
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
                <h2>{service.name}</h2>
                <p>{service.description}</p>
                <ul className="features-list list-unstyled">
                  {service.shortKeyPoints.map((point, index) => (
                    <li key={index}>
                      <i className="bi bi-patch-check-fill me-2"></i> {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  