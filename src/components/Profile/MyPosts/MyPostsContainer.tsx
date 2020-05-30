import React from "react";
import {connect} from "react-redux";
import {addPostAC, changeValueAC, elementsArrayPosts} from "../../../redux/profileReducer";
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

let mapStateToProps = (state: AppStateType) : MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        valueTextArea: state.profilePage.valueTextArea
    }
}

let MyPostsContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType >(mapStateToProps, {addPostAC, changeValueAC})(MyPosts)

export default MyPostsContainer;