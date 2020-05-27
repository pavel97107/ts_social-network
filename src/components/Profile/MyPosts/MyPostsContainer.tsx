import React from "react";
import {connect} from "react-redux";
import {addPost, changeValue} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";



let mapStateToProps = (state: any) => {
    return {
        profilePage: state.profilePage,
        valueTextArea: state.profilePage.valueTextArea
    }
}

let mapDispatchToProps = (dispatch: any) => {
        return {
            addPost: () => dispatch(addPost()),
            changeValue: (text: string) => dispatch(changeValue(text))
            }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;