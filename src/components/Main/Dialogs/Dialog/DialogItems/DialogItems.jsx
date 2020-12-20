import { NavLink } from "react-router-dom"

const DialogItems = props => {
    return (
        <form>
            <NavLink to={`/dialogs/${props.id}`}>
                <img src="" />
                <div>
                    {props.name}
                </div>
                <input type="text" placeholder="Написать сообщение..." className="mainChat" />
            </NavLink>
        </form>
    );
}

export default DialogItems;