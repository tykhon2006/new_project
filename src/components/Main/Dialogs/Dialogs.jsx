import Dialog from "./Dialog/Dialog";
import classes from "./Dialogs.module.css";

const Dialogs = (props) => {
    
    return (
        <div className={classes.dialogs}>
            <Dialog dialogData = {props.dialogsPage.dialogData}/>
        </div>
    );
}

export default Dialogs;