import classes from "./Main.module.css";
import { Route } from "react-router-dom";
import Dialogs from "./Dialogs/Dialogs";
import Profile from "./Profile/Profile";
import News from "./News/News";

const Main = (props)=>{
    
    return(
        <main className={`${classes.main} bg_app`}>
            <Route path="/profile" render={ ()=> <Profile />} /> 
            <Route path="/news" render={ ()=> <News />} />
            <Route path="/dialogs" render={ ()=> <Dialogs dialogData = {props.dialogData}/>} />
        </main>
    );
}


export default Main;