import { NavLink } from "react-router-dom";
import avatar from "../../../../../img/avatar.png";
import classes from "./Post.module.css";


const Post = props => {
    return (
        <NavLink to={`/profile/${props.id}`} >
            <div className={classes.postArea}>
                <div className={classes.post}>
                    <img src={avatar} alt="avatar" />
                    <div>
                        {props.post}
                    </div>
                </div>
            </div>
        </NavLink>
    );
}

export default Post;