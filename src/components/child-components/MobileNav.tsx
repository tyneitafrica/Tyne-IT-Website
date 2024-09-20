import { NavLink } from "react-router-dom";
import { DropdownComponent } from "./DropDown";
import { useContext, useState } from "react";
import { MenuOpenContext } from "./Navbar";


export const MobileNav = () => {
  const [overflow, setOverflow] = useState<boolean>(false);
  const {isMenuOpen} = useContext(MenuOpenContext);
  const servicesChildren = [
    { title: "Web development", link: "/" },
    { title: "Database Development", link: "/" },
    { title: "Api Development", link: "/" },
  ];
  const itSupportChildren = [
    { title: "Software Installation", link: "/" },
    { title: "Vendor Management", link: "/" },
    { title: "IT procument", link: "/" },
    {
      title: "IT consulting",
      link: "/",
      children: [
        { title: "Technology RoadMapping", link: "/" },
        { title: "Cost optimization", link: "/" },
        { title: "Digital Transformation", link: "/" },
      ],
    },
    {
      title: "IT support for Schools",
      link: "/",
      children: [
        { title: "Hardware and software support", link: "/" },
        { title: "Network Management", link: "/" },
        { title: "Data Backup & Recovery", link: "/" },
        { title: "Cyber security solutions", link: "/" },
      ],
    },
    
  ];
  return (
    <ul
      className={`${
        isMenuOpen ? "max-h-screen" : "max-h-0 border-0"
      } ${overflow?'overflow-visible':'overflow-hidden'} d-flex flex-column bg-white d-xl-none position-absolute  top-16 end-0 start-0  px-4 text-capitalize text-small text-muted w-100 transition-base mobileNav-ul`}
    >
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="about">About</NavLink>
      </li>
      <DropdownComponent linkTo="services" linkToChildren={servicesChildren} overflow={overflow} setOverflow={setOverflow}/>
      <DropdownComponent linkTo="services" linkToChildren={itSupportChildren} overflow={overflow} setOverflow={setOverflow}/>
      <li>
        <NavLink to="portfolio">Portfolio</NavLink>
      </li>
    </ul>
  );
};
