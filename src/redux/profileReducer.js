import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";
import store from "./store";
//========================type=========================================
const set_profileState="set_profileState";
const set_statusTexr="set_statusTexr";
const set_isStatus="set_isStatus";
const set_profilePhoto="social-app/profile/set-profilePhoto"
const set_users_profileState="social-app/profile/set-users-profile"
const set_profile="social-app/profile/set-profile"
//=====================initializer=====================================
const initializationProfile={
    profile:null,
    users:null,
    statusText:"",
    isStatus:false,
}
//=======================Reduser======================================
const profileReduser=(state=initializationProfile,action)=>{
        switch (action.type) {
            case set_profileState:
                return {...state,
                profile:action.profile
                };
                case set_users_profileState:
                return {...state,
                    users:action.profile
                };
            case set_statusTexr:
                return {...state,
                statusText:action.status
                };
                case set_isStatus:
                return {...state,
                isStatus:action.isStatus
                };
            case set_profilePhoto:
                
                return {...state,
                    profile:{...state.profile,photos:action.photos}
                }
            default:
                return state;
        }
    
}
export default profileReduser
//========================Action Creators===========================
export const setProfileState=(profile)=>{return({type:set_profileState,profile})}
export const setStatusText=(status)=>{return {type:set_statusTexr,status}}
export const setIsStatus=(isStatus)=>{return {type:set_isStatus,isStatus}}
export const setProfilePhoto=(photos)=>{return {type:set_profilePhoto,photos}}
export const setUsersProfile=(profile)=>{return{type:set_users_profileState,profile}}
//==============================thunk===============================
export const getProfile=(id)=>(dispatch)=>{
        
        profileAPI.getProfile(id)
        .then(data=>
            {

                return dispatch(setProfileState(data))
                
            }
                )
}
export const getUsersProfile=(id)=>(dispatch)=>{
        
    profileAPI.getProfile(id)
    .then(data=>
        {

            return dispatch(setUsersProfile(data))
            
        }
            )
}
export const getStatusText=(id)=>(dispatch)=>{
    
    profileAPI.getStatus(id)
    .then(data=>{
        return dispatch(setStatusText(data))
    })
}
export const putStatusText=(status)=>(dispatch)=>{
    profileAPI.putStatus(status)
    .then(data=>
        {
            if (data.resultCode===0) {   
                return dispatch(setStatusText(status))
            }
        })
}
export const putProfilePhoto=(photos)=>async(dispatch)=>{
    let data=await profileAPI.putPhoto(photos)
    if (data.resultCode===0) {
        
        return dispatch(setProfilePhoto(data.data.photos))
    }
    
}
export const putProfile=(profile)=>async(dispatch)=>{
    let response= await profileAPI.putProfile({...profile})
    
    if (response.resultCode===0) {
        let userId=store.getState().profilePage.profile.userId
        dispatch(getProfile(userId))
        return response
    }else{
        // let message = response.messages.length > 0 ? response.messages[0] : "Some error";
            dispatch(stopSubmit("login", {_error: "message"}));
    }
}