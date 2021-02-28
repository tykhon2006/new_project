import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../../redux/profileReducer";
import storeContext from "../../../../storeContext";
import MyPosts from "./MyPosts";

const MyPostsContainer = () => {





    return (
        <storeContext.Consumer>
            {
                (store) => {
                    const state = store.getState();
                    const addMessage = () => {
                        let action = addPostActionCreator();
                        store.dispatch(action);
                    }
                    const addPostChange = (text) => {
                        let action = updateNewPostTextActionCreator(text);
                        store.dispatch(action);
                    }
                    return (
                        <MyPosts postData={state.profilePage.postData} newPostText={state.profilePage.newPostText} addPost={addMessage} updateNewPostText={addPostChange} />
);
                }
            }
        </storeContext.Consumer>
    );
}
export default MyPostsContainer;