import React from "react";
import { renderFieldInputForPost } from "../Common/units/renderField";
import { maxLength, minValue, required } from "../Common/units/validation";
import {  Navigate } from "react-router-dom";
import { Form, Field } from 'react-final-form'
import s from "./Auth.module.css"
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const LoginForm=({isDissabled,setDissabled,...props})=>{
    let maxLength20=maxLength(20)
    let maxLength40=maxLength(40)
    const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)
  
    return <Form
    onSubmit={props.onSubmit}
    
    
    >
        {({handleSubmit,form,pristine,submitting})=>(
        <form className={s.authFormCont} onSubmit={async event => {
            await handleSubmit(event)
            form.reset()
          }}  >
            <h1>Авторизуйтесь</h1>
            <div className={s.authInpCont}>
                <Field validate={composeValidators(required, maxLength40)}    placeholder="enter login" component={renderFieldInputForPost} type="email" name="email"/>
            </div>
            <div className={s.authInpCont}>
                <Field validate={composeValidators(required, maxLength20)}   placeholder="enter password" component={renderFieldInputForPost} type="password" name="password"/>
            </div>
            <div className={s.authCheckCont}>
                <Field id="custom-checkbox"  component={"input"} type="checkbox" name="rememberMe"/>
                <label htmlFor="custom-checkbox" className={s.customLabel}>remember me</label>
            </div>
            <div >{props.error
            ?<>
            <div >
                <div className={props.error.error?s.validError:s.dNone}>{props.error.error}</div>
            </div>
            {props.error.error==="Incorrect anti-bot symbols"&&<CaptchViewComp {...props}/>}
            </>
            :""}</div>
            
            <div className={s.submitCont}>
                <Button type="submit" variant="contained" disabled={submitting} color="success" endIcon={<SendIcon />}>Send</Button>
            </div>
        </form>
    )
        }
    </Form>
}

const CaptchViewComp=({url,...props})=>{
    
    return <div className={s.authInpCont}>
                <div className={s.imgCont}><img src={url} alt="captcha"/></div>
                <Field validate={required} placeholder="write letters above" component={renderFieldInputForPost} type="text" name="captcha"/>
    </div>
}

const Auth=(props)=>{
    
    if (props.isAuth) {
        return <Navigate to={"/profile"}/>
    }
    return <div>
        <div className={s.testUser}>
            <h2>Test account:</h2>
            <p>Come in to profile, like test user</p>
            <Button onClick={props.onSubmitToAutoLogIn} variant="contained" color="success">Log-in like test user</Button>
        </div>
        <div className={s.orLoginYourAcc}>or login your account:</div>
        <LoginForm {...props} onSubmit={props.onSubmit}/>
    </div>
}
export default Auth