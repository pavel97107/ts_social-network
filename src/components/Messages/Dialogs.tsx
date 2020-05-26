import React from 'react';
import s from './Dialogs.module.css';
import DialogsUser from "./DialogsUser/DialogsUser";
import Message from "./MessageItem/Message";
const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>{<DialogsUser />}</div>
            <div className={s.messages}>
                <div className={s.contentMessages}>
                    <div className={s.messageItems}>{<Message/>}</div>
                </div>
                <div className={s.addDataMessage}>
                <textarea className={s.textForm} />
                    <div><button className={s.addBtn}  type='submit'>add</button></div>
                </div>
            </div>


        </div>
    );
}

export default Dialogs;