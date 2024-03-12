import { messageAPI } from "../api/api";
import store from "./store";

const ADD_DIALOG = "ADD-DIALOG";
const UPDATE_DIALOG = "UPDATE-DIALOG";
const set_dialogs_to_friend="social-app/profile/set_dialogs_to_friend"
const set_dialogs="social-app/profile/set_dialogs"
const set_messages="social-app/profile/set_messages"

const initialState={
  contacts:null,
  dialogs: null
}
const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DIALOG: {
      return {
        ...state,
        dialogs: [
          ...state.dialogs,
          { id: 10, mess: action.text, name: "Alex Black" },
        ],
      };
    }
    case set_dialogs:
      return {...state,
      contacts:action.data
    }
    case set_messages:
      return {...state,
        dialogs:action.items
    }
    default:
      return state;
  }
};
export default messagesReducer;
// =====================action creator========================
const putStartDialogToFriendAC=(userId)=>({type:set_dialogs_to_friend,userId})
export const update_dialog_actionCreator = (text) => ({
  type: UPDATE_DIALOG,
  mess: text,
});
export const addDialogAC = (text) => ({ type: ADD_DIALOG,text });
export const setDialogsToContactsAC=(data)=>({type:set_dialogs,data})
export const setMessagesAC=(items)=>({type:set_messages,items})
// ========================thunk=================================
export const addDialog=(text)=>(dispatch)=>{
  dispatch(addDialogAC(text))
}
export const putStartDialogToFriend=(id=null)=>async(dispatch)=>{
  try {
    let userId=id||store.getState().profilePage.users.userId
    await messageAPI.putDialog(userId)
    dispatch(getDialogUsers())
    dispatch(getMessagesFromUser(userId))
  } catch (error) {
    
  }
}
export const getDialogUsers=()=>async(dispatch)=>{
  try {
  let data=await messageAPI.getDialog()
  dispatch(setDialogsToContactsAC(data.data))
  } catch (error) {
    
  }
}
export const postMessageToUser=(body,uId=null)=>async(dispatch)=>{
  try { 
    
    let userId=uId||store.getState().profilePage.users.userId
    await messageAPI.postMessageToUser(userId,body)
    dispatch(getMessagesFromUser(userId))
  } catch (error) {

  }
}
export const getMessagesFromUser=(uId=null)=>async(dispatch)=>{
  let userId=uId||store.getState().messagesPage.contacts[0].id
  let data=await messageAPI.getMessagesFromUser(userId) 
    dispatch(setMessagesAC(data.items))
    

}
