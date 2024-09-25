import tyneLogo from "../../assets/img/tyne.ico";
import { NavLink } from "react-router-dom";
import { Fade as Hamburger } from "hamburger-react";
import { useState } from "react";
import { MobileNav } from "./MobileNav";
import { DeskNav } from "./DeskNav";
import { createContext } from "react";

interface MenuOpenContextType {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

export const MenuOpenContext = createContext<MenuOpenContextType>({
  isMenuOpen: false,
  setIsMenuOpen: () => {},
});
export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [requestQuote, setRequestQuote] = useState(false);
  return (
    <MenuOpenContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      <header
        id="header"
        className="header d-flex align-items-center fixed-top"
      >
        <div className="container-fluid container-xl position-relative d-flex align-items-center">
          <NavLink to="/" className="logo d-flex align-items-center me-auto">
            <h1 className="sitename">
              <img src={tyneLogo} alt="tyneIT Logo" />
            </h1>
          </NavLink>

          <nav id="navmenu" className="navmenu">
            <DeskNav />
            <div className="d-xl-none">
              <Hamburger
                toggled={isMenuOpen}
                toggle={setIsMenuOpen}
                direction="right"
                size={28}
                color="#666"
              />
            </div>
          </nav>
          <MobileNav />

          <a
            className="btn-getstarted"
            onClick={() => setRequestQuote(!requestQuote)}
          >
            Get Started
          </a>
        </div>
        <div className={`${requestQuote ? "open" : ""} request-quote d-flex flex-column p-4 py-5`}>
          
          <h2>Lets Discuss Your Project</h2>
          <p>We will email or call you to discuss</p>
          <form
            action="forms/contact.php"
            method="post"
            className="php-email-form"
          >
            <div className="row gy-4 postion-relative">
              <div className="request-quote-close">
                <i
                  className="bi bi-x-lg"
                  onClick={() => setRequestQuote(!requestQuote)}
                ></i>
              </div>
              <div className="col-md-6">
                <label htmlFor="name-field" className="pb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name-field"
                  className="form-control"
                  required
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="email-field" className="pb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email-field"
                  required
                />
              </div>

              <div className="col-md-12">
                <label htmlFor="subject-field" className="pb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject-field"
                  required
                />
              </div>

              <div className="col-md-12">
                <label htmlFor="message-field" className="pb-2">
                  Message
                </label>
                <textarea
                  className="form-control"
                  name="message"
                  rows={10}
                  id="message-field"
                  required
                ></textarea>
              </div>

              <div className="col-md-12 text-center">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>

                <button className="request-quote-submit" type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </header>
    </MenuOpenContext.Provider>
  );
};
