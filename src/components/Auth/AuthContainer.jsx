import React, { useState } from "react";
import Auth from "./Auth";
import { compose } from "redux";
import { connect } from "react-redux";
import { postLogin } from "../../redux/headerReducer";

const AuthContainer=(props)=>{
    
    const onSubmit=({email,password,captcha})=>{
        
        props.postLogin(email,password,captcha)
        

    }
    const onSubmitToAutoLogIn=()=>{
        props.postLogin("free@samuraijs.com","free")
    }
    return <Auth {...props} onSubmit={onSubmit} onSubmitToAutoLogIn={onSubmitToAutoLogIn}/>
}

const mapToStateToProps=(state)=>{
    
    return {
        isAuth:state.auth.isLogin,
        error:state.form.LoginForm,
        url:state.auth.captcha,
    }
}

export default compose(
connect(mapToStateToProps,{postLogin}),
    
)(AuthContainer)