import classes from "./Main.module.css";
import { Route } from "react-router-dom";
import Dialogs from "./Dialogs/Dialogs";
import Profile from "./Profiles/Profile";
import News from "./News/News";

const Main = (props) => {

    return (
        <main className={`${classes.main} bg_app`}>
            <Route exact path={["/","/profile"]} render={() => <Profile  />}  />
            <Route path="/news" render={() => <News />} />
            {/* <Route path="/dialogs" render={() => <Dialogs store = {props.store}  />} /> */}
        </main>
    );
}


export default Main;