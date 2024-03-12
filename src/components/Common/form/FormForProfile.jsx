import React from "react";
import s from "./FormForProfile.module.css";
import { Field, Form } from "react-final-form";
import {
  renderFieldInputForPost,
  renderFieldTextareaForPost,
} from "../units/renderField";
import { maxLength, required } from "../units/validation";
let ProfileFormInfo = (props) => {
  const composeValidators =
    (...validators) =>
    (value) =>
      validators.reduce(
        (error, validator) => error || validator(value),
        undefined
      );
  const aboutMe = () => {
    return (
      <div className={s.aboutMeDesc}>
        <Field
          validate={composeValidators(required, maxLength(200))}
          component={renderFieldTextareaForPost}
          placeholder="write some about yourself..."
          name="aboutMe"
        />
      </div>
    );
  };
  const contactInfoList = () => {
    return (
      <div className={s.contacts}>
        <ul>
          {Object.keys(props.profile.contacts).map((key) => {
            return (
              <li key={key}>
                <span>{key}</span>
                -{" "}
                <Field
                  name={key}
                  component={renderFieldInputForPost}
                  placeholder="http://site.com"
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <Form initialValues={props.profile} onSubmit={props.onSubmit}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className={s.fullnameContainer + " " + s.commonContainer}>
            <div className={s.titleFullname}>Полное имя</div>
            <div>
              <Field
                validate={composeValidators(required, maxLength(20))}
                component={renderFieldInputForPost}
                name="fullName"
              />
            </div>
          </div>
          <div className={s.aboutmeContainer + " " + s.commonContainer}>
            <div className={s.title}>О себе</div>
            {aboutMe()}
          </div>
          <div className={s.container + " " + s.commonContainer}>
            <div className={s.contactsTitle}>Контакты</div>
            {contactInfoList()}
          </div>
          <div>{props.error}</div>
          <button className={s.send}>Сохранить</button>
        </form>
      )}
    </Form>
  );
};

export default ProfileFormInfo;
