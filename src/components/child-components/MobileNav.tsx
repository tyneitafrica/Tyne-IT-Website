import { NavLink } from "react-router-dom";
import { MenuOpenContext } from "./Navbar";
import { useContext } from "react";
import { Accordion } from "react-bootstrap";
import tyneLogo from "/tyne.ico";
export const MobileNav = () => {
  const menuOpenContext = useContext(MenuOpenContext);
  const { isMenuOpen, setIsMenuOpen } = menuOpenContext;
  const isDisabled = true;
  return (
    <div className={`mobile-slide ${isMenuOpen ? "open" : ""}`}>
      <NavLink
        to="/" onClick={() => setIsMenuOpen(false)}       className="logo d-flex align-items-center me-auto pt-1 pb-2"
      >
        <h1 className="sitename">
          <img src={tyneLogo} alt="tyneIT Logo" />
        </h1>
      </NavLink>
      <ul className="mobileNav-ul">
        <li>
          <NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
        </li>
        <li>
          <NavLink to="about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
        </li>
        <Accordion as={"ul"} className="mobileNav-ul" defaultActiveKey={"0"}>
          <Accordion.Item as={"li"} eventKey="0">
            <Accordion.Header
              as={NavLink}
              to={"/services"}
              onClick={(e) => isDisabled && e.preventDefault()}
            >
              Services
            </Accordion.Header>
            <Accordion.Body as={"ul"} className="mobileNav-ul">
              {/* Software Development */}
              <Accordion as={"ul"} className="mobileNav-ul">
                <Accordion.Item as={"li"} eventKey="0">
                  <Accordion.Header
                    as={NavLink}
                    to={"/services"}
                    onClick={(e) => isDisabled && e.preventDefault()}
                  >
                    Software Development
                  </Accordion.Header>
                  <Accordion.Body as={"ul"}>
                    <li>
                      <NavLink to="/services/web-dev" onClick={() => setIsMenuOpen(false)}>
                        Web Design & Development
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/services/mobile-dev" onClick={() => setIsMenuOpen(false)}>
                        Mobile App Development
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/services/ecommerce-dev" onClick={() => setIsMenuOpen(false)}>
                        Ecommerce Development/Integration
                      </NavLink>
                    </li>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              {/* IT Support */}
              <Accordion as={"ul"} className="mobileNav-ul">
                <Accordion.Item as={"li"} eventKey="0">
                  <Accordion.Header
                    as={NavLink}
                    to={"/services"}
                    onClick={(e) => isDisabled && e.preventDefault()}
                  >
                    IT support
                  </Accordion.Header>
                  <Accordion.Body as={"ul"}>
                    <Accordion as={"ul"} className="mobileNav-ul">
                      <Accordion.Item as={"li"} eventKey="0">
                        <Accordion.Header
                          as={NavLink}
                          to={"/services"}
                          onClick={(e) => isDisabled && e.preventDefault()}
                        >
                          IT consulting
                        </Accordion.Header>
                        <Accordion.Body as={"ul"}>
                          <li>
                            <NavLink to="/services" onClick={() => setIsMenuOpen(false)}>
                              Technology RoadMapping
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/services" onClick={() => setIsMenuOpen(false)}>Cost optimization</NavLink>
                          </li>
                          <li>
                            <NavLink to="/services" onClick={() => setIsMenuOpen(false)}>
                              Digital Transformation
                            </NavLink>
                          </li>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                    <Accordion as={"ul"} className="mobileNav-ul">
                      <Accordion.Item as={"li"} eventKey="0">
                        <Accordion.Header
                          as={NavLink}
                          to={"/services"}
                          onClick={(e) => isDisabled && e.preventDefault()}
                        >
                          IT consulting for schools
                        </Accordion.Header>
                        <Accordion.Body as={"ul"}>
                          <li>
                            <NavLink to="/services" onClick={() => setIsMenuOpen(false)}>
                              Hardware and software support
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/services" onClick={() => setIsMenuOpen(false)}>Network Management</NavLink>
                          </li>
                          <li>
                            <NavLink to="/services" onClick={() => setIsMenuOpen(false)}>
                              Data Backup & Recovery
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/services" onClick={() => setIsMenuOpen(false)}>
                              Data Backup & Recovery
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/services" onClick={() => setIsMenuOpen(false)}>
                              Cyber security solutions
                            </NavLink>
                          </li>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                    <li>
                      <NavLink to="" onClick={() => setIsMenuOpen(false)}>
                        Software Installation
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="" onClick={() => setIsMenuOpen(false)}>
                        Vendor Management
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="" onClick={() => setIsMenuOpen(false)}>
                        IT procument
                      </NavLink>
                    </li>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <li>
                <NavLink to="/services">Data/Business analytics</NavLink>
              </li>
              <li>
                <NavLink to="/services">Outsourcing services</NavLink>
              </li>
              <li>
                <NavLink to="/services">Learning & development support</NavLink>
              </li>
              <li>
                <NavLink to="/services">OEM reseller services</NavLink>
              </li>
              <li>
                <NavLink to="/services">Software asset management</NavLink>
              </li>
              <li>
                <NavLink to="/services">IT equipment leasing</NavLink>
              </li>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion as={"ul"} className="mobileNav-ul">
          <Accordion.Item as={"li"} eventKey="0">
            <Accordion.Header
              as={NavLink}
              to={"/services"}
              onClick={(e) => isDisabled && e.preventDefault()}
            >
              IT solutions
            </Accordion.Header>
            <Accordion.Body as={"ul"}>
              <li>
                <NavLink to="">
                  Procurement Solutions
                </NavLink>
              </li>
              <li>
                <NavLink to="">
                  HRM solutions
                </NavLink>
              </li>
              <li>
                <NavLink to="">
                  IT procurement & sourcing services
                </NavLink>
              </li>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        {/* <li>
          <NavLink to="portfolio">Portfolio</NavLink>
        </li> */}
      </ul>
    </div>
  );
};
