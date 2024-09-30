import tyneLogo from "../../assets/img/tyne.ico";
import { NavLink } from "react-router-dom";
import { Fade as Hamburger } from "hamburger-react";
import { useState } from "react";
import { MobileNav } from "./MobileNav";
import { DeskNav } from "./DeskNav";
import { createContext } from "react";
import { RequestQuote } from "./RequestQuote";
import { MobileNav1 } from "./MobileNav1";

interface MenuOpenContextType {
  isMenuOpen: boolean;
  requestQuote: boolean;
  setIsMenuOpen: (value: boolean) => void;
  setRequestQuote: (value: boolean) => void;
}

export const MenuOpenContext = createContext<MenuOpenContextType>({
  isMenuOpen: false,
  requestQuote: false,
  setIsMenuOpen: () => {},
  setRequestQuote: () => {},
});
export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [requestQuote, setRequestQuote] = useState(false);
  return (
    <MenuOpenContext.Provider value={{ isMenuOpen, requestQuote, setIsMenuOpen, setRequestQuote }}>
      <header
        id="header"
        className="header d-flex align-items-center fixed-top"
      >
        <div className="container-fluid container-xl  d-flex align-items-center">
          <NavLink to="/" className="logo d-flex align-items-center me-auto">
            <h1 className="sitename">
              <img src={tyneLogo} alt="tyneIT Logo" />
            </h1>
          </NavLink>

          <nav id="navmenu" className="navmenu">
            <DeskNav />
            <div className={`d-xl-none ${requestQuote ? "":""}`}>
              <Hamburger
                toggled={isMenuOpen}
                toggle={setIsMenuOpen}
                direction="right"
                size={28}
                color="#666"
              />
            </div>
            <RequestQuote />
          </nav>
          {/* <MobileNav /> */}
          <MobileNav1 />
          <button
            className="btn-getstarted"
            onClick={() => setRequestQuote(!requestQuote)}
          >
            Get Started
          </button>
        </div>
        
      </header>
    </MenuOpenContext.Provider>
  );
};
