import React from "react";
import {connect} from "react-redux";
import {addPostAC, changeValueAC} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";



let mapStateToProps = (state: any) => {
    return {
        posts: state.profilePage.posts,
        valueTextArea: state.profilePage.valueTextArea
    }
}

let MyPostsContainer = connect(mapStateToProps, {addPostAC, changeValueAC})(MyPosts)

export default MyPostsContainer;