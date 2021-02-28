import avatar from "../../../../img/avatar.png";
import Post from "./Post/Post";
import classes from "./MyPosts.module.css";
import React from "react";

const MyPosts = (props) => {
    const addMessage = () => {    
        if(props.newPostText !== ""){
            props.addPost();
        }
    }
    const newPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
        
    }
  
    let postElements = props.postData.map(recording => <Post post={recording.post} id={recording.id} />);

    return (
        <div className={classes.makePost}>
            <div className={`boxPost ${classes.post}`}>
                <img src={avatar} />
                <textarea cols="30" rows="1" name="post" className={classes.makePost__textarea}  onChange={newPostChange} value={props.newPostText} />
                <div className={classes.submit} onClick={addMessage} >Submit</div>
            </div>
            <div>
                {postElements}
            </div>
        </div>
    );
}
export default MyPosts;