import { connect } from "react-redux";
import Navbar from "./Navbar";

let mapStateToProps=(state)=>{
  return ({
    navbar:state.navbar.navbarList,
    profile:state.profilePage.profile,
    users:state.navbar.items
  })
}

const NavbarContainer=connect(mapStateToProps,{})(Navbar)
export default NavbarContainer;
