import { Outlet } from "react-router-dom"
import { Footer } from "./child-components/Footer"
import { NavBar } from "./child-components/Navbar"
export const Layout = () => {
  return (<>
    <NavBar/>
    <Outlet />
    <Footer/>
  </>)
}
