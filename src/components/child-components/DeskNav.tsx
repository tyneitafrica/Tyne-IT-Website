import { Link, NavLink } from "react-router-dom";

export const DeskNav = () => {
  return (
    <ul className="d-none d-xl-flex">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="about">About</NavLink>
      </li>
      <li className="dropdown">
        <NavLink to="services">
          <span>Services</span>{" "}
          <i className="bi bi-chevron-down toggle-dropdown"></i>
        </NavLink>
        <ul>
          <li className="dropdown">
            <a href="#">
              <span>Software Development</span>{" "}
              <i className="bi bi-chevron-down toggle-dropdown"></i>
            </a>
            <ul>
              <li>
                <Link to="/services/web-dev">Web Design & Development</Link>
              </li>
              <li>
              <Link to="/services/mobile-dev">Mobile App Development</Link>
              </li>
              <li>
              <Link to="/services/ecommerce-dev">Ecommerce Development/Integration</Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#">
              <span>IT Support</span>{" "}
              <i className="bi bi-chevron-down toggle-dropdown"></i>
            </a>
            <ul>
              <li className="dropdown">
                <NavLink to={'/services/it-consulting'}>
                  <span>IT consulting</span>{" "}
                  <i className="bi bi-chevron-down toggle-dropdown"></i>
                </NavLink>
                <ul>
                  <li>
                    <a href="#">Technology RoadMapping</a>
                  </li>
                  <li>
                    <a href="#">Cost optimization</a>
                  </li>
                  <li>
                    <a href="#">Digital Transformation</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <Link to="/services/school-support">
                  <span>IT support for Schools</span>{" "}
                  <i className="bi bi-chevron-down toggle-dropdown"></i>
                </Link>
                <ul>
                  <li>
                    <a href="#">Hardware and software support</a>
                  </li>
                  <li>
                    <a href="#">Network Management</a>
                  </li>
                  <li>
                    <a href="#">Data Backup & Recovery</a>
                  </li>
                  <li>
                    <a href="#">Cyber security solutions</a>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/services/software-installation">Software Installation</Link>
              </li>
              <li>
                <Link to="/services/vendor-management">Vendor Management</Link>
              </li>
              <li>
                <Link to="/services/it-procurement">IT procument</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/services/data-analytics">Data analytics</Link>
          </li>
          <li>
            <Link to="/services/outsourcing">Outsourcing services</Link>
          </li>
          <li>
            <Link to="services/learning-courses">Learning  courses</Link>
          </li>
          <li>
            <Link to="services/oem-reseller">OEM reseller services</Link>
          </li>
          <li>
            <Link to="/services/software-management">Software management</Link>
          </li>
          <li>
            <Link to="/services/equipment-leasing">IT equipment leasing</Link>
          </li>
        </ul>
      </li>
      <li className="dropdown">
        <a href="#">
          <span>IT solutions</span>{" "}
          <i className="bi bi-chevron-down toggle-dropdown"></i>
        </a>
        <ul>
          <li>
            <Link to="/services/it-procurement">Procurement Solutions</Link>
          </li>
          <li>
            <Link to="services/hrm">HRM solutions</Link>
          </li>
          <li>
            <Link to = "/services/it-procurement">IT procurement & sourcing services</Link>
          </li>
        </ul>
      </li>
      <li>
        <NavLink to="portfolio">Portfolio</NavLink>
      </li>
    </ul>
  );
};
