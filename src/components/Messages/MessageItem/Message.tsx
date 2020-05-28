import React from 'react';
import s from './Message.module.css';

type propsType = {
    message: string
}

const Message = (props: propsType) => {
    return <div>{props.message}</div>;
}
export default Message;