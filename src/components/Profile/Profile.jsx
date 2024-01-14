import React, { useEffect, useState } from "react";
import Preloader from "../Common/Preloader/Preloader";
import pustoyAva from "./../../accets/images/pustoyprofile.jpg"
import s from "./Profile.module.css"
const Profile=(props)=>{

    let [state,setState]=useState("")
    let [isStatus,setIsStatus]=useState(false)
    useEffect(()=>{
        setState(props.statusText)
    },[props.statusText])
    const changeInputStatus=(e)=>{
        setState(e.target.value)
    }
    const changeBlockStatus=()=>{
        if (!isStatus) {
            
            setIsStatus(true)
        }else{
            props.putStatusText(state)
            setIsStatus(false)
        }
    }
    if (!props.profile) {
        return <Preloader/>
    }
        return (
            <div>

            <div className={s.myAva}><img src={props.profile.photos.large?props.profile.photos.large:pustoyAva} alt="ava" /></div>
            <div>{props.profile.fullName}</div>
            {!isStatus&&<div onDoubleClick={()=>changeBlockStatus()}>{props.statusText||"======"}</div>}
            {isStatus&&<div>
                <input type="text" autoFocus={true} onChange={changeInputStatus} value={state}/>
                <button onClick={()=>changeBlockStatus()}>Сохранить</button>
                </div>}
            </div>
        
    )
}

export default Profile