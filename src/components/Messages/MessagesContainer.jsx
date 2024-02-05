import React, { useEffect, useState } from "react";
import {
  addDialog,
  getDialogUsers,
  getMessagesFromUser,
  postMessageToUser,
  putStartDialogToFriend,
} from "../../redux/messagesReducer";
import Messages from "./Messages";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";


const MessagesContainer=React.memo((props)=>{
  let [isActive,setActive]=useState(null)
  let [userPhoto,setUserPhoto]=useState("")
  let curentRef=React.createRef()
  useEffect(()=>{
    
    let cur=curentRef.current
    props.getDialogUsers()
    cur.scrollTop = cur.scrollHeight;
  },[])
  const onSubmit=(formData)=>{
    
    props.postMessageToUser(formData.body,isActive)
  }
  const setUserInfo=(id,src)=>{
    
    props.putStartDialogToFriend(id)
    setActive(id)
    setUserPhoto(src)
  }


  return <Messages profile={props.profile} userPhoto={userPhoto} isActive={isActive} setUserInfo={setUserInfo} curentRef={curentRef} onSubmit={onSubmit} {...props}/>
}
)

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
    profile:state.profilePage.profile,

  };
};
// let mapDispatchToProps = (dispatch) => {
//   return {
//     addDialog: (text) => {
//       dispatch(add_dialog_actionCreator(text));
//     },
//   };
// };

export default compose(
  connect(mapStateToProps, {addDialog,getDialogUsers,postMessageToUser,getMessagesFromUser,putStartDialogToFriend}),
  withAuthRedirect
)(MessagesContainer);
