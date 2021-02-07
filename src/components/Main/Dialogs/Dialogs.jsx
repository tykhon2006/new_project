import Dialog from "./Dialog/Dialog";
import classes from "./Dialogs.module.css";

const Dialogs = (props) => {
    
    return (
        <div className={classes.dialogs}>
            <Dialog dialogsPage={props.dialogsPage} dispatch={props.dispatch}/>
        </div>
    );
}

export default Dialogs;