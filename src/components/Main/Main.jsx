import classes from "./Main.module.css";
import { Route } from "react-router-dom";
import Dialogs from "./Dialogs/Dialogs";
import Profile from "./Profiles/Profile";
import News from "./News/News";

const Main = (props) => {

    return (
        <main className={`${classes.main} bg_app`}>
            <Route path="/profile" render={() => <Profile profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText = {props.updateNewPostText} />}  />
            <Route path="/news" render={() => <News />} />
            <Route path="/dialogs" render={() => <Dialogs dialogsPage={props.state.dialogsPage} />} />
        </main>
    );
}


export default Main;