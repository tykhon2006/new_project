import { NavLink } from "react-router-dom";
import classes from "./Nav.module.css";

const Nav = () => {
    return (
        <nav className={`${classes.nav} bg_app`}>
            <ul className={classes.chats}>
                <li><NavLink to="/profile" >Profile</NavLink></li>
                <li><NavLink to="/dialogs" >Dialogs</NavLink></li>
                <li><a href="#" >User</a></li>
                <li><a href="#" >User</a></li>
                <li><a href="#" >User</a></li>
                <li><a href="#" >User</a></li>
            </ul>

        </nav>


    );
}


export default Nav;