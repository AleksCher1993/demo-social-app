import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Users from "./Users";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { withRouter } from "../../../hoc/withRouter";
import { getProfile, getStatusText, getUsersProfile, putProfile, putProfilePhoto, putStatusText, setIsStatus } from "../../../redux/profileReducer";
import { putStartDialogToFriend } from "../../../redux/messagesReducer";

const UsersContainer=React.memo(({...props})=>{
    let [isEdit,setIsEdit]=useState(false)
    useEffect(()=>{
        let userId=props.match.params.profileId;
        if (!userId) {
            userId=props.userId.userId||props.userId.id
        }
            props.getUsersProfile(userId)
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
    const startDialogHandler=()=>{
        props.putStartDialogToFriend()
    }
    return <Users {...props}  changeStatusText={changeStatusText} 
    updateProfilePhoto={updateProfilePhoto} submitHandler={submitHandler}
    isEdit={isEdit} setIsEdit={setIsEdit} startDialogHandler={startDialogHandler}/>
}
)

const mapStateToProps=(state)=>({
    profile:state.profilePage.users,
    isStatus:state.profilePage.isStatus,
    statusText:state.profilePage.statusText,
    userId:state.auth.auth,
    // usersProfile:state.profilePage.users,
    
})

export default compose(
    connect(mapStateToProps,{getProfile,getStatusText,setIsStatus,putStatusText,putProfilePhoto,putProfile,getUsersProfile,putStartDialogToFriend}),
    withRouter,
    withAuthRedirect)
    (UsersContainer)