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
                <Link to="/services/Web design & Development">Web Design & Development</Link>
              </li>
              <li>
              <Link to="/services/Mobile App Development">Mobile App Development</Link>
              </li>
              <li>
              <Link to="/services/Ecommerce">Ecommerce Development/Integration</Link>
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
                <a href="#">
                  <span>IT consulting</span>{" "}
                  <i className="bi bi-chevron-down toggle-dropdown"></i>
                </a>
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
                <a href="#">
                  <span>IT support for Schools</span>{" "}
                  <i className="bi bi-chevron-down toggle-dropdown"></i>
                </a>
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
                <a href="#">Software Installation</a>
              </li>
              <li>
                <a href="#">Vendor Management</a>
              </li>
              <li>
                <a href="#">IT procument</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Data/Business analytics</a>
          </li>
          <li>
            <a href="#">Outsourcing services</a>
          </li>
          <li>
            <a href="#">Learning & development support</a>
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
