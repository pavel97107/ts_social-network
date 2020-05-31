import React from "react";
import {AppStateType} from "../../redux/redux-store";
import {action, itemsType} from "../../redux/usersReducer";
import {connect} from "react-redux";
import Users from "./Users";

export type mapStateToPropsType = {
    users: Array<itemsType>
}
export type mapDispatchToPropsType = {
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setUsers: (users: Array<itemsType>) => void
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: any): mapDispatchToPropsType => {
    return {
        follow: (userId) => dispatch(action.follow(userId)),
        unFollow: (userId) => dispatch(action.unFollow(userId)),
        setUsers: (users) => dispatch(action.setUsers(users))
    }

}


let UsersContainer = connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(Users)


export default UsersContainer;