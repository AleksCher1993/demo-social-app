import React, { useEffect, useRef } from "react";
import c from "./Message.module.css";
import ContactItem from "./ContactItem/ContactItem";
import DialogItem from "./DialogItem/DialogItem";
import FormForPost from "../Common/form/formForPost";

const Messages = ({ profile,userPhoto,isActive,setUserInfo,onSubmit,curentRef,messagesPage,addDialog,...props }) => {
  
  const contactlist =messagesPage.contacts&&messagesPage.contacts.map((contact) => (
    <ContactItem
    isActive={isActive}
    setUserInfo={setUserInfo}
    key={contact.id}
      id={contact.id}
      src={contact.photos.small}
      name={contact.userName}
    />
  ));
  const dialogList = messagesPage.dialogs&&messagesPage.dialogs.map((dialog) => {
    let dialogItem;
    if (dialog.senderId === profile.userId) {
      dialogItem = (
        <DialogItem
        key={dialog.id}
          id={dialog.id}
          mess={dialog.body}
          name={dialog.name}
          type="main"
          src={profile?profile.photos.small:null}
        />
      );
    } else
      dialogItem = (
        <DialogItem key={dialog.id} id={dialog.id} mess={dialog.body} name={dialog.name} src={userPhoto}/>
      );
    return dialogItem;
  });

  return (
      <div className={c.container}>
        <div className={c.body}>
          <div className={c.contacts_list}>
            {messagesPage.contacts&&messagesPage.contacts.lengts!==0
            ?contactlist
            :<div className={c.pustoyContact}>
            <p>Нет контактов</p>
          </div>
        }
        </div>
          {/* <div ref={curentRef} className={c.dialog_list}>{dialogList}</div> */}
          <div ref={curentRef} className={c.dialog_list}>
            {messagesPage.dialogs&&messagesPage.dialogs.length!==0
            ?dialogList
            :<div className={c.pustoyMessage}>
              <p>No active dialogues,
select dialogue on the left</p>
            </div>
          }
          </div>
        </div>
        <div className={c.send_body}>
          <div></div>
          <div className={c.textarea}>
            <FormForPost  addDialog={addDialog} onSubmit={onSubmit}/>
          </div>
        </div>
      </div>
  );
};
export default Messages;
