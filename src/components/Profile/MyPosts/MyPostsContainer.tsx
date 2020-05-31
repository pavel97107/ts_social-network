import React from "react";
import {connect} from "react-redux";
import {action, elementsArrayPosts} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {AppStateType} from "../../../redux/redux-store";

export type MapStatePropsType = {
    posts: Array<elementsArrayPosts>
    valueTextArea: string
}
export type MapDispatchPropsType = {
    addPostAC: () => void
    changeValueAC: (text: string) => void
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        valueTextArea: state.profilePage.valueTextArea
    }
}
let mapDispatchToProps = (dispatch: any): MapDispatchPropsType => {
    return {
        addPostAC: () => dispatch(action.addPostAC()),
        changeValueAC: (text: string) => dispatch(action.changeValueAC(text))
    }
}


let MyPostsContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;