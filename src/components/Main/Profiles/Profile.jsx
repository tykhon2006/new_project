import avatar from "../../../img/avatar.png";

import MyPostsContainer from "./MyPosts/MyPostsContainer";
import classes from "./Profile.module.css";

const Profile = (props) => {
    return (
        <div >
            <div className={classes.profile}>
                <div className={classes.mainProfile}>
                    <div>Name : Vasya</div>
                    <div>Age : 35</div>
                    <div>Country : Odessa</div>
                    <div>Phone number : +9999999999</div>
                </div>
                <div className={classes.photo}>
                    <img src={avatar} />
                </div>
            </div>
            <MyPostsContainer />
        </div>
    );
}

export default Profile;