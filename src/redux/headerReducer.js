import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";
const SET_AUTH_STATE="setAuthState"
const SET_ISLOGIN="setIsLogin"
const initializeAuth={
    auth:null,
    isLogin:false,
}
const headerReducer=(state=initializeAuth,action)=>{
    switch (action.type) {
        case SET_AUTH_STATE:
            return {...state,auth:{...action.authState}};
            case SET_ISLOGIN:
            
            return {...state,isLogin:action.isLogin};
    
        default:
            return state;
    }
}
export default headerReducer
export const setAuthState=(authState)=>({type:SET_AUTH_STATE,authState})
export const setIsLogin=(isLogin)=>({type:SET_ISLOGIN,isLogin})

export const getAuthMe=()=>(dispatch)=>{
    return authAPI.authMe()
    .then(data=>{
      
      if (data.resultCode===0) {
        dispatch(setAuthState(data.data))
        dispatch(setIsLogin(true))
      }
    })
}
export const postLogin=(email,password)=>(dispatch)=>{
    authAPI.postlogin(email,password)
    .then(data=>{
        {
            if (data.resultCode===0) {
                dispatch(getAuthMe())
                
            }else{
                let messageError=data.messages.length>0?data.messages[0]:"Другие неполадки!"
                let action=stopSubmit("login",{_error:messageError})
                dispatch(action)
            }
        }
    }) 
}
export const deleteLogin=()=>(dispatch)=>{
    authAPI.deleteLogin()
    .then(data=>{
        {
            if (data.resultCode===0) {
                dispatch(setIsLogin(false))
                setAuthState(null)
            }
        }
    })
}