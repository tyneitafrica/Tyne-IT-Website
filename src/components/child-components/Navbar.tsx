import tyneLogo from '../../assets/img/tyne.ico'
import { NavLink } from 'react-router-dom'
export const NavBar = () => {
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">

        <NavLink to="/" className="logo d-flex align-items-center me-auto">
          <h1 className="sitename"><img src={tyneLogo} alt="tyneIT Logo" /></h1>
        </NavLink>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="about">About</NavLink></li>
            <li className="dropdown"><NavLink to="services"><span>Services</span> <i className="bi bi-chevron-down toggle-dropdown"></i></NavLink>
              <ul>
                <li><a href="#">Web development</a></li>
                <li><a href="#">Database Management</a></li>
                <li><a href="#">Api Development</a></li>
              </ul>
            </li>

            <li className="dropdown">
              <a href="#"><span>IT Support</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
              <ul>
              <li className="dropdown">
                  <a href="#"><span>IT consulting</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                  <ul>
                    <li><a href="#">Technology RoadMapping</a></li>
                    <li><a href="#">Cost optimization</a></li>
                    <li><a href="#">Digital Transformation</a></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#"><span>IT support for Schools</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                  <ul>
                    <li><a href="#">Hardware and software support</a></li>
                    <li><a href="#">Network Management</a></li>
                    <li><a href="#">Data Backup & Recovery</a></li>
                    <li><a href="#">Cyber security solutions</a></li>
                  </ul>
                </li>
                <li><a href="#">Software Installation</a></li>
                <li><a href="#">Vendor Management</a></li>
                <li><a href="#">IT procument</a></li>
              </ul>
            </li>
            <li><NavLink to="portfolio">Portfolio</NavLink></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <a className="btn-getstarted" href="#about">Get Started</a>

      </div>
    </header>
  )
}
