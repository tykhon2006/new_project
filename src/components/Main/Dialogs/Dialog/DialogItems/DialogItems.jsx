import { NavLink } from "react-router-dom";
import React from "react";
import avatar from "../../../../../img/avatar.png";

const DialogItems = props => {
    let newDialog = React.createRef();
    let addDialog = () => {
        let text = newDialog.current.value;
        alert(text);
    }
    return (
        <form>
            <NavLink to={`/dialogs/${props.id}`}>
                <img src={avatar} ></img>
                <div>
                    {props.name}
                </div>
                <input ref={newDialog} type="text" placeholder="Написать сообщение..." className="mainChat" />
                <button onClick={addDialog}>Submit</button>
            </NavLink>
        </form>
    );
}

export default DialogItems;