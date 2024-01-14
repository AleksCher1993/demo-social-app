import { profileAPI } from "../api/api";
//========================type=========================================
const set_profileState="set_profileState";
const set_statusTexr="set_statusTexr";
const set_isStatus="set_isStatus";
//=====================initializer=====================================
const initializationProfile={
    profile:null,
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
            case set_statusTexr:
                return {...state,
                statusText:action.status
                };
                case set_isStatus:
                return {...state,
                isStatus:action.isStatus
                };
                
            default:
                return state;
        }
    
}
export default profileReduser
//========================Action Creators===========================
export const setProfileState=(profile)=>{return({type:set_profileState,profile})}
export const setStatusText=(status)=>{return {type:set_statusTexr,status}}
export const setIsStatus=(isStatus)=>{return {type:set_isStatus,isStatus}}
//==============================thunk===============================
export const getProfile=(id)=>(dispatch)=>{
        
        profileAPI.getProfile(id)
        .then(data=>
            {

                return dispatch(setProfileState(data))
                
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

