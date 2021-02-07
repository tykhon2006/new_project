import classes from "./Header.module.css";
import avatar from "../../img/avatar.png";
import call from "../../img/call.jpg";
import option from "../../img/option.png";
import logo from "../../img/logo.png";

const Header = () => {
    return (
        <header className={`${classes.header} bg_app`}>
            <div className={classes.header__search}>
                <img src={logo} />
                <form>
                    <input type="text" placeholder="Поиск" className={classes.search} />
                </form>
            </div>

            <div className={classes.call}>
                <img src={call} />
                <img src={option} />
            </div>


            <div className={classes.header__profile}>
                <b>Username</b>
                <img src={avatar} />
            </div>


        </header>
    );
}


export default Header;