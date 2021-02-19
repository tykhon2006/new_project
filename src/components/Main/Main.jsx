import classes from "./Main.module.css";
import { Route } from "react-router-dom";
import Dialogs from "./Dialogs/Dialogs";
import Profile from "./Profiles/Profile";
import News from "./News/News";

const Main = (props) => {

    return (
        <main className={`${classes.main} bg_app`}>
            <Route exact path={["/","/profile"]} render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />}  />
            <Route path="/news" render={() => <News  dispatch={props.dispatch} />} />
            <Route path="/dialogs" render={() => <Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch} />} />
        </main>
    );
}


export default Main;