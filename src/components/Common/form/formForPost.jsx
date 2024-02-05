import React from "react";
import s from "./formForPost.module.css";
import { Form, Field } from "react-final-form";
import { maxLength, required } from "../units/validation";
import { renderFieldTextareaForPost } from "../units/renderField";

let FormForPost = (props) => {
  const maxLength200 = maxLength(200);
  
  return (
    <Form
      onSubmit={props.onSubmit}
      initialValues={{"body":""}}
    >
      {
        ({handleSubmit,form})=>(<form className={s.formForPost} onSubmit={async event => {
          await handleSubmit(event)
          form.reset()
        }} >
        <Field
          component={renderFieldTextareaForPost}
          name="body"
          placeholder="Write what you wish..."
          validate={maxLength200}
          />
        <button  className="publish__create-btn">Publish</button>
      </form>)
        }
    </Form>
  );
};

export default FormForPost;
