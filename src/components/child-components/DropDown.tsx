import { Dropdown } from "react-bootstrap"
import { NavLink } from "react-router-dom"

type linkToChildrenProps = {
    title:string,
    link:string,
    children?:linkToChildrenProps[]
}
export const DropdownComponent = ({linkTo,linkToChildren}:{linkTo:string,linkToChildren:linkToChildrenProps[]})=>{
   return (
    <Dropdown as="li">
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
            {linkToChildren.map((linkToChild,index)=>{
                return (
                    <li key={index}>
                        {!linkToChild.children? <Dropdown.Item as={NavLink} to={linkToChild.link}>
                            {linkToChild.title}
                        </Dropdown.Item>:<DropdownComponent linkTo={linkToChild.title} linkToChildren={linkToChild.children}/>}
                    </li>
                )
            })}
        </Dropdown.Menu>
      </Dropdown>
   )
}