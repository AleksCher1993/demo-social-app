import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const mapToStateToProps=(state)=>{
    return {
        isAuth:state.auth.isLogin
    }
}

export const withAuthRedirect=(Component)=>{
    class RedirectComponent extends React.Component{
        render=()=>{
            if (!this.props.isAuth) {
                return <Navigate to='/auth'/>
            }
            return <Component {...this.props}/>
        }
    }
    let NewComponent=connect(mapToStateToProps)(RedirectComponent)
    return NewComponent
}