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
            <a href="#">Data analytics</a>
          </li>
          <li>
            <a href="#">Outsourcing services</a>
          </li>
          <li>
            <Link to="services/learning-courses">Learning  courses</Link>
          </li>
          <li>
            <a href="#">OEM reseller services</a>
          </li>
          <li>
            <a href="#">Software asset management</a>
          </li>
          <li>
            <a href="#">IT equipment leasing</a>
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
            <a href="#">Procurement Solutions</a>
          </li>
          <li>
            <a href="#">HRM solutions</a>
          </li>
          <li>
            <a href="#">IT procurement & sourcing services</a>
          </li>
        </ul>
      </li>
      <li>
        <NavLink to="portfolio">Portfolio</NavLink>
      </li>
    </ul>
  );
};
