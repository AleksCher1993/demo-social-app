import React, { useEffect, useState } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfile, getStatusText,setIsStatus,putStatusText, putProfilePhoto, putProfile } from "../../redux/profileReducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import {  useParams } from 'react-router-dom';
import { withRouter } from "../../hoc/withRouter";


 const ProfileContainer=React.memo((props)=>{
    let [isEdit,setIsEdit]=useState(false)
    useEffect(()=>{
        let userId=props.match.params.profileId;
        if (!userId) {
            userId=props.userId.userId||props.userId.id
        }
            props.getProfile(userId)
            props.getStatusText(userId)

    },[props.match.params.profileId,props.userId.id,props.userId.userId])
    const changeStatusText=(text)=>{
        props.putStatusText(text)
    }
    const updateProfilePhoto=(file)=>{
        props.putProfilePhoto(file)
    }
    const submitHandler=(dataForm)=>{
        
        props.putProfile(dataForm).then(()=>{
            setIsEdit(false)
        })
    }
    return <Profile  {...props}  changeStatusText={changeStatusText} 
    updateProfilePhoto={updateProfilePhoto} submitHandler={submitHandler}
    isEdit={isEdit} setIsEdit={setIsEdit}/>
 }
 )
const mapStateToProps=(state)=>{
    return({
        profile:state.profilePage.profile,
        isStatus:state.profilePage.isStatus,
        statusText:state.profilePage.statusText,
        userId:state.auth.auth,
        
    })
}

export default compose(
    connect(mapStateToProps,{getProfile,getStatusText,setIsStatus,putStatusText,putProfilePhoto,putProfile}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)