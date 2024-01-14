import React from "react";
import { Field, reduxForm } from "redux-form";
import { renderFieldInputForPost } from "../Common/units/renderField";
import { maxLength, minValue, required } from "../Common/units/validation";
import { Navigate } from "react-router-dom";

export const LoginForm=(props)=>{
    let maxLength20=maxLength(20)
    let maxLength40=maxLength(40)
    return <>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required,maxLength40]} placeholder="email" component={renderFieldInputForPost} type="email" name="email"/>
            </div>
            <div>
                <Field validate={[required,maxLength20]} placeholder="password" component={renderFieldInputForPost} type="password" name="password"/>
            </div>
            <div>
                <Field  component={"input"} type="checkbox" name="rememberMe"/> <span>remember me</span>
            </div>
            <div>{props.error}</div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    </>
}

const Auth=(props)=>{
    let LoginReduxForm=reduxForm({form:"login"})(LoginForm)
    if (props.isAuth) {
        return <Navigate to={"/profile"}/>
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={props.onSubmit}/>
    </div>
}
export default Auth