import avatar from "../../../../img/avatar.png";
import Post from "./Post/Post";
import classes from "./MyPosts.module.css";
import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../../redux/state";

const MyPosts = (props) => {
    let newPost = React.createRef();
    const addMessage = () => {
        let action = addPostActionCreator();
        props.dispatch(action);
    }
    const newPostChange = () => {
        let text = newPost.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }
  
    let postElements = props.postData.map(recording => <Post post={recording.post} id={recording.id} />);

    return (
        <div className={classes.makePost}>
            <div className={`boxPost ${classes.post}`}>
                <img src={avatar} />
                <textarea cols="30" rows="1" name="post" className={classes.makePost__textarea} ref={newPost} onChange={newPostChange} value={props.newPostText} />
                <div className={classes.submit} onClick={addMessage} >Submit</div>
            </div>
            <div>
                {postElements}
            </div>
        </div>
    );
}
export default MyPosts;