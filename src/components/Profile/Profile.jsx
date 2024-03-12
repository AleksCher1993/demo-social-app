import React, { useEffect, useState } from "react";
import Preloader from "../Common/Preloader/Preloader";
import pustoyAva from "./../../accets/images/pustoyprofile.jpg";
import backProfile from "./../../accets/images/backProfile.jpg";
import s from "./Profile.module.css";
import InputLoadPhoto from "./inputLoadPhoto/inputLoadPhoto";
import ProfileFormInfo from "../Common/form/FormForProfile";
import NewsfeedContainer from "../Newsfeed/NewsfeedContainer";

let Profile = ({
  changeStatusText,
  updateProfilePhoto,
  submitHandler,
  isEdit,
  setIsEdit,
  ...props
}) => {
  let [state, setState] = useState("");
  let [isStatus, setIsStatus] = useState(false);

  let [isOpen, setIsOpen] = useState(false);

  // =====================================================
  useEffect(() => {
    setState(props.statusText);
  }, [props.statusText]);

  const changeInputStatus = (e) => {
    setState(e.target.value);
  };
  const handleFileChange = (e) => {
    if (!e.target.files) {
      return;
    }
    updateProfilePhoto(e.target.files[0]);
  };
  const changeBlockStatus = () => {
    if (!isStatus) {
      setIsStatus(true);
    } else {
      changeStatusText(state);
      setIsStatus(false);
    }
  };
  const editHandler = () => {
    setIsEdit(true);
    setIsOpen(true);
  };
  // ==================================================

  // ==================================================
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={s.backProfile}>
        <img src={backProfile} alt="" />
      </div>
      <div className={s.profileInfo}>
        <div className={`${s.myAva}`}>
          <img
            src={
              props.profile.photos.large
                ? props.profile.photos.large
                : pustoyAva
            }
            alt="ava"
          />
          <div className={`${s.avaOptions}`}>
            <ul>
              <li>
                <InputLoadPhoto handleFileChange={handleFileChange} />
              </li>
            </ul>
          </div>
        </div>
        <div className={s.profileDescription}>
          <div className={s.fullname}>{props.profile.fullName}</div>

          {!isStatus && (
            <div
              className={s.statusText}
              onDoubleClick={() => changeBlockStatus()}
            >
              {props.statusText || "======"}
            </div>
          )}
          {isStatus && (
            <div className={s.statusInputContainer}>
              <input
                type="text"
                autoFocus={true}
                onChange={changeInputStatus}
                value={state}
                maxLength={50}
              />
              <button onClick={() => changeBlockStatus()}>Сохранить</button>
            </div>
          )}
        </div>
        <div className={s.editProfileBtn}>
          <button onClick={editHandler}>
            <span className={s.dNone}>Редактировать</span>
            <svg
              className="feather feather-edit"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
          </button>
        </div>
      </div>
      <div className={s.aboutDescription}>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={!isOpen ? s.downArrow : `${s.downArrow} ${s.arrowRotate}`}
        >
          <span></span>
        </div>
        <div className={!isOpen ? s.body : `${s.body} ${s.active}`}>
          {!isEdit ? (
            <ProfileInfo {...props} />
          ) : (
            <ProfileFormInfo profile={props.profile} onSubmit={submitHandler} />
          )}
        </div>
      </div>
      <NewsfeedContainer profile={props.profile} />
    </div>
  );
};
const ProfileInfo = (props) => {
  const aboutMe = () => {
    return (
      <div className={s.aboutMeDesc}>
        {props.profile.aboutMe
          ? props.profile.aboutMe
          : "add some information..."}
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
                {key} -{" "}
                {props.profile.contacts[key]
                  ? props.profile.contacts[key]
                  : "add some information..."}
              </li>
            );
          })}
        </ul>
      </div>
    );
  };
  return (
    <>
      <div className={s.fullnameContainer + " " + s.commonContainer}>
        <div className={s.titleFullname}>Полное имя</div>
        <div>{props.profile.fullName}</div>
      </div>
      <div className={s.aboutmeContainer + " " + s.commonContainer}>
        <div className={s.title}>О себе</div>
        {aboutMe()}
      </div>
      <div className={s.container + " " + s.commonContainer}>
        <div className={s.contactsTitle}>Контакты</div>
        {contactInfoList()}
      </div>
    </>
  );
};

export default Profile;
