import React from "react";
import { connect } from "react-redux";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../../redux/profileReducer";

import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {

    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.NewPostText
    };
}
const mapDispatchToProps = (dispatch) => {

    return {
        updateNewPostText(text) {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost(){
            let action = addPostActionCreator;
            dispatch(action);
        }
    };
}
const myPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default myPostContainer;