import React from "react";
import {mapDispatchToPropsType, mapStateToPropsType} from "./UsersContainer";
import s from './Users.module.css';

type propsType = mapDispatchToPropsType & mapStateToPropsType

const Users = (props: propsType) => {
    return <div>{props.users.map((user) => {
        return (<div className={s.userItem}>
            <div className={s.avatarBox}>{user.photos.large}</div>
            <div className={s.infoBox}>{user.name}{user.id}{user.status}</div>
            <div className={s.followBox}>{user.followed}</div>
        </div>)
    })}</div>
}

export default Users;