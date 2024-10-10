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
                <Link to="/services/ecommerce-dev">
                  Ecommerce Development/Integration
                </Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#">
              <span>IT Support</span>{" "}
              <i className="bi bi-chevron-down toggle-dropdown"></i>
            </a>
            <ul>
              <li>
                <NavLink to={"/services/it-consulting"}>IT consulting</NavLink>
              </li>
              <li>
                <Link to="/services/school-support">IT support for Schools</Link>
              </li>
              <li>
                <Link to="/services/software-installation">
                  Software Installation
                </Link>
              </li>
              <li>
                <Link to="/services/vendor-management">Vendor Management</Link>
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
            <Link to="services/learning-courses">Learning courses</Link>
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
            <Link to="/services/it-procurement">
              IT procurement & sourcing services
            </Link>
          </li>
        </ul>
      </li>
      {/* <li>
        <NavLink to="portfolio">Portfolio</NavLink>
      </li> */}
    </ul>
  );
};
