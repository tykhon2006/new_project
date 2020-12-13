import classes from "./Main.module.css";
import { Route } from "react-router-dom";
import Dialogs from "./Dialogs/Dialogs";
import Profile from "./Profile/Profile";

const Main = ()=>{
    return(
        <main className={`${classes.main} bg_app`}>
            <Route path="/profile" render={ ()=> <Profile />} /> 
            <Route path="/dialogs" render={ ()=> <Dialogs />} />
        </main>
    );
}


export default Main;