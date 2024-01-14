import { connect } from "react-redux";
import Navbar from "./Navbar";

let mapStateToProps=(state)=>{
  return ({
    navbar:state.navbar
  })
}
let mapDispatchToProps=()=>{
  return ({})
}
const NavbarContainer=connect(mapStateToProps,mapDispatchToProps)(Navbar)
export default NavbarContainer;
