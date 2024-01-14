import React from "react"
import s from "./renderField.module.css"
export const renderFieldTextareaForPost = ({ input,meta: { touched, error, warning },...props }) => (
    <>
          
        <textarea {...input} {...props}  cols="30" rows="10"/>
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </>

  )
export const renderFieldInputForPost=({input,meta:{touched,error,warning},...props})=>{
    
    return <div className={s.validContainer}>
        <div className={touched&&error?s.validError:s.dNone}>{error}</div>
        <input {...input} {...props} className={touched&&error?s.touched:""}/>
    </div>
}