import { Link } from "react-router-dom"
export const Footer = ()=>{
    return (
        <footer id="footer" className="footer light-background">

      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <a href="index.html" className="d-flex align-items-center">
              <span className="sitename">Tyne IT</span>
            </a>
            <div className="footer-contact pt-3">
              <p>A108 Upper Hill</p>
              <p>Nairobi, Kenya</p>
              <p className="mt-3"><strong>Phone:</strong> <span>+254 755 789 788</span></p>
              <p><strong>Email:</strong> <span>info@tyneitconsulting.africa</span></p>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="bi bi-chevron-right"></i> <Link to="/">Home</Link></li>
              <li><i className="bi bi-chevron-right"></i> <Link to="about">About us</Link></li>
              <li><i className="bi bi-chevron-right"></i> <Link to="services">Services</Link></li>
              {/* <li><i className="bi bi-chevron-right"></i> <Link to="portfolio">Portfolio</Link></li> */}
            </ul>
          </div>

          <div className="col-lg-3 col-md-3 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i className="bi bi-chevron-right"></i> <Link to="services/web-dev">Web Development</Link></li>
              <li><i className="bi bi-chevron-right"></i> <Link to="services/mobile-dev">Mobile App Development</Link></li>
              <li><i className="bi bi-chevron-right"></i> <Link to="services/ecommerce-dev">Ecommerce Development</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-12">
            <h4>Follow Us</h4>
            <p>Find us in your favorite platform</p>
            <div className="social-links d-flex">
              <a href=""><i className="bi bi-twitter-x"></i></a>
              <a href=""><i className="bi bi-facebook"></i></a>
              <a href=""><i className="bi bi-instagram"></i></a>
              <a href=""><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>© <span>Copyright</span> <strong className="px-1 sitename">Tyne IT</strong> <span>All Rights Reserved</span></p>

      </div>

    </footer>
    )
}
