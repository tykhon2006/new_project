import { NavLink } from "react-router-dom";
import React from "react";
import avatar from "../../../../../img/avatar.png";
import classes from "./DialogItems.module.css";
const DialogItems = props => {
    let newDialog = React.createRef();
    let addDialog = () => {
        let text = newDialog.current.value;
        alert(text);
    }
    return (
        <form>
            <NavLink className={classes.chats} to={`/dialogs/${props.id}`}>
                <img src={avatar} ></img>
                <div>
                    {props.name}
                </div>
               
            </NavLink>
        </form>
    );
}

export default DialogItems;