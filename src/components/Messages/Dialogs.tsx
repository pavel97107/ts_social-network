import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogsUser from "./DialogsUser/DialogsUser";
import Message from "./MessageItem/Message";
import {MapDispatchToPropsType, MapStateToPropsType} from "./Dialogs.Container";

type PropsType = MapDispatchToPropsType & MapStateToPropsType;


const Dialogs = (props: PropsType) => {

    let itemMessage = props.messagesData.map((el) => {
        return <Message message={el.message} key={el.id}/>
    })

    let itemDialogs = props.messagesData.map((el: any) => {
        return <DialogsUser name={el.name} key={el.id}/>
    })

    let sendMessage = () => {
        props.sendMessageAC()

    }

    let changeValue = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let text = event.target.value
        props.changeValueMessageAC(text)

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>{itemDialogs}</div>
            <div className={s.messages}>
                <div className={s.contentMessages}>
                    <div className={s.messageItems}>{itemMessage}</div>
                </div>
                <div className={s.addDataMessage}>
                    <textarea onChange={changeValue} className={s.textForm} value={props.valueTextArea}/>
                    <div>
                        <button onClick={sendMessage} className={s.addBtn} type='submit'>add</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;