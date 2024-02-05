import { userAPI } from "../api/api"

const set_Follower="social-app-get-follower"
let initialState={
  navbarList:[
    {id:1,href:"/profile",mess:"Profile"},
    {id:2,href:"/messages",mess:"Message"},
    {id:3,href:"/people",mess:"People"},
  ],
  items:null,
}
const navbarReducer=(state=initialState,action)=>{
    switch (action.type) {
      case set_Follower:
        
        return {...state,items:action.items};
    
      default:
        return state
    }
    
}

const setFollower=(items)=>({type:set_Follower,items})

export const getFollower=()=>async(dispatch)=>{
  let data=await userAPI.getFollower()
  dispatch(setFollower(data.items))
}

export default navbarReducer