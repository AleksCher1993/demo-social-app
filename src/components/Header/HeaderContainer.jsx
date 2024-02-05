import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { deleteLogin } from "../../redux/headerReducer";
import { getProfile } from "../../redux/selectors/peopleSelectors";
const HeaderContainer=(props)=>{
  return <Header {...props} />
}

let mapToStateToProps=(state)=>{
  return ({
    isLogin:state.auth.isLogin,
    authState:state.auth.auth,
    profile:getProfile(state)
  })
}
export default connect(mapToStateToProps,{deleteLogin})(HeaderContainer);


