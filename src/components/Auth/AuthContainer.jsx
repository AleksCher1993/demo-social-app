import React from "react";
import Auth from "./Auth";
import { compose } from "redux";
import { connect } from "react-redux";
import { postLogin } from "../../redux/headerReducer";

const AuthContainer=(props)=>{
    const onSubmit=({email,password})=>{
        props.postLogin(email,password)
    }
    return <Auth {...props}  onSubmit={onSubmit}/>
}

const mapToStateToProps=(state)=>{
    return {
        isAuth:state.auth.isLogin,
    }
}

export default compose(
connect(mapToStateToProps,{postLogin}),
    
)(AuthContainer)