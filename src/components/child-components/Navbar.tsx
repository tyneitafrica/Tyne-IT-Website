import tyneLogo from '../../assets/img/tyne.ico'
import { NavLink } from 'react-router-dom'
export const NavBar = ()=>{
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
            <li><NavLink to="services">Services</NavLink></li>
            <li><NavLink to="portfolio">Portfolio</NavLink></li>
            {/* <li className="dropdown"><a href="#pricing"><span>Pricing</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
              <ul>
                <li><a href="#starter">Starter Package</a></li>
                <li><a href="#growth">Growth Package</a></li>
                <li><a href="#enterprise">Enterprise Package</a></li>
              </ul>
            </li>
            <li><a href="#team">Team</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li> */}
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <a className="btn-getstarted" href="#about">Get Started</a>

      </div>
    </header>
    )
}
