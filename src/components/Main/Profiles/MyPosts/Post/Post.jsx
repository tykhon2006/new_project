import { NavLink } from "react-router-dom";
import avatar from "../../../../../img/avatar.png";
import classes from "./Post.module.css";


const Post = props => {
    return (
        <NavLink to={`/profile/${props.id}`} >
                <div className={`boxPost ${classes.post}`}>
                    <img src={avatar} alt="avatar" />
                    <div>
                        {props.post}
                    </div>
                </div>
        </NavLink>
    );
}

export default Post;