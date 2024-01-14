import React, { useEffect } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfile, getStatusText,setIsStatus,putStatusText } from "../../redux/profileReducer";

import { Navigate, useParams } from 'react-router-dom';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

function withRouter(Children){
    return(props)=>{

       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 } 

 const ProfileContainer=React.memo((props)=>{
    useEffect(()=>{
                let userId=props.match.params.profileId;
        if (!userId) {
            
            
            userId=props.userId.userId||props.userId.id
            if (!userId) {
                return <Navigate to={'/auth'}/>
            }
            
        }
            props.getProfile(userId)
            props.getStatusText(userId)
    },[])
    return <Profile {...props} />
 }
 )
const mapStateToProps=(state)=>{
    return({
        profile:state.profilePage.profile,
        isStatus:state.profilePage.isStatus,
        statusText:state.profilePage.statusText,
        userId:state.auth.auth
    })
}

export default compose(
    connect(mapStateToProps,{getProfile,getStatusText,setIsStatus,putStatusText}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)