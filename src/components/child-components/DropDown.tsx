import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// import { MenuOpenContext } from "./Navbar";

type linkToChildrenProps = {
  title: string;
  link: string;
  children?: linkToChildrenProps[];
};
export const DropdownComponent = ({
  linkTo,
  linkToChildren,
  overflow,
  setOverflow,
}: {
  linkTo: string;
  linkToChildren: linkToChildrenProps[];
  overflow: boolean;
  setOverflow: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [show, setShow] = useState(false);
//   const { isMenuOpen,setIsMenuOpen } = useContext(MenuOpenContext);

  const handleMouseEnter = () => {
    setShow(true);
    setOverflow(true);
  };
  const handleMouseLeave = () => {
    setShow(false);
    setOverflow(false);
  };
  return (
    <Dropdown
      as="li"
      show={show}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Dropdown.Toggle
        as={NavLink}
        to={linkTo} // Change from button to div
        style={{
          width: "100%",
        }}
        variant="success"
        id="dropdown-basic"
      >
        {linkTo}
      </Dropdown.Toggle>

      <Dropdown.Menu as="ul" className="w-100" style={{ padding: "3px 9px" }}>
        {linkToChildren.map((linkToChild, index) => {
          return (
            <li key={index}>
              {!linkToChild.children ? (
                <Dropdown.Item as={NavLink} to={linkToChild.link}>
                  {linkToChild.title}
                </Dropdown.Item>
              ) : (
                <DropdownComponent
                  linkTo={linkToChild.title}
                  linkToChildren={linkToChild.children}
                  overflow={overflow}
                  setOverflow={setOverflow}
                />
              )}
            </li>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};
