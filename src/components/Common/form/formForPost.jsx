import React from "react";
import s from "./formForPost.module.css"
import { Field, reduxForm } from "redux-form";
import { maxLength, required } from "../units/validation";
import { renderFieldTextareaForPost } from "../units/renderField";
let FormForPost =(props)=>{
const maxLength100 = maxLength(100)
  
    return <form className={s.formForPost} onSubmit={props.handleSubmit} >
        <Field
          component={renderFieldTextareaForPost}
          name="publishTextarea"
          placeholder="Write what you wish..."
          validate={[  maxLength100 ]}
        />
        <button className="publish__create-btn" >
          Publish
        </button>
    </form>
}
FormForPost = reduxForm({
  form: "formPost"
})(FormForPost)
export default FormForPost