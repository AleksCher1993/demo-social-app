import React from "react";
import { getAuthMe } from "./headerReducer";
import { getProfile } from "./profileReducer";
const set_initialized="set_initialized"
let initializer={
    initialized:false,
}

const appReduser=(state=initializer,action)=>{
    switch (action.type) {
        case set_initialized:
            
            return {
                ...state,
                initialized:true,
            };
    
        default:
            return state;
    }
}

export const initializedSuccess=()=>({
    type:set_initialized
})

export const initializedSuccessThunk=()=>(dispatch)=>{
    let getAuthMePrommise=dispatch(getAuthMe())
    Promise.all([getAuthMePrommise])
    .then((data)=>{
        dispatch(initializedSuccess())        
    })
}
export default appReduser