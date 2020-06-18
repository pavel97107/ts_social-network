import React, {useEffect} from "react";
import {mapDispatchToPropsType, mapStateToPropsType} from "./UsersContainer";
import s from './Users.module.css';
import axios from 'axios'

type propsType = mapDispatchToPropsType & mapStateToPropsType

const Users = (props: propsType) => {




        // useEffect( () => {
        //     axios.get('https://social-network.samuraijs.com/api/1.0/users')
        //         .then(response => {
        //             props.setUsers(response.data.items)
        //         })
        //
        // })




    return <div className={s.containerUsers}>
        {props.users.map((user) => {
            return (<div key={user.id} className={s.userItem}>
                <div className={s.avatarBox}>
                    <img src={user.photos.small} alt=""/>
                </div>
                <div className={s.infoBox}>{user.name}{user.id}{user.status}</div>
                <div className={s.followBox}>{user.followed}</div>
                <div className={s.btn_request}>
                    {user.followed ? <button onClick={() => props.unFollow(user.id)}>UNFOLLOW</button> :
                        <button onClick={() => props.follow(user.id)}>FOLLOW</button>}
                </div>
            </div>)
        })}
    </div>
}

export default Users;