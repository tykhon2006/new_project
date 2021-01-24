import avatar from "../../../../img/avatar.png";
import Post from "./Post/Post";
import classes from "./MyPosts.module.css";
import React from "react";

const MyPosts = (props) => {
    let newPost = React.createRef();
    const addMessage = () => {
        props.addPost();
    }
    const newPostChange = ()=> {
        let text = newPost.current.value;
        props.updateNewPostText(text);
    }
    let postElements = props.postData.map(recording => <Post post={recording.post} id={recording.id} />);

    return (
        <div className={classes.makePost}>
            <div className={classes.submitPost}>
                <img src={avatar} />
                <textarea cols="50" rows="1" name="post" ref = {newPost} onChange = {newPostChange} value = {props.newPostText} />
                <div className={classes.submit} onClick={addMessage} >Submit</div>
            </div>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    );
}
export default MyPosts;