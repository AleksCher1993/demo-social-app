import React from "react"
import s from "./renderField.module.css"
import TextField from '@mui/material/TextField';
export const renderFieldTextareaForPost = ({ input,meta: { touched, error, warning },...props }) => (
    <div className={s.validContainer}>
          
        <textarea {...input} {...props}  cols="30" rows="10"/>
        <div className={touched&&error?s.validError:s.dNone}>{error}</div>
    </div>

  )
export const renderFieldInputForPost=({input,meta:{touched,error,warning},...props})=>{
    
    return <div className={s.validContainer}>
        {/* <TextField {...input} {...props} id="outlined-basic" className={touched&&error?s.touched:""}  /> */}
        <input {...input} {...props} className={touched&&error?s.touched:""}/>
        <div className={touched&&error?s.validError:s.dNone}>{error}</div>
    </div>
}