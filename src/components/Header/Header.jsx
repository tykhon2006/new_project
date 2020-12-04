import classes from "./Header.module.css";

const Header = () => {
    return (
        <header>
            <a href="#" className={classes.options}></a>
            <input type="text" placeholder="Поиск" className={classes.search}></input>
            <nav>
                <ul className={classes.menu}>
                    <li><a href="#" className={classes.userName}>User</a></li>
                    <li><a href="#">Call</a></li>
                    <li><a href="#">User Options</a></li>
                    <li><a href="#">Find</a></li>
                </ul>
            </nav>
        </header>
    );
}


export default Header;