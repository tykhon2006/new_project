import { sendMessageCreator, updateNewMessageBodyCreator } from "../../../../redux/state";
import DialogItems from "./DialogItems/DialogItems";
import Messages from "./DialogItems/Messages";
import classes from "./Dialog.module.css";

const Dialog = (props) => {

    let dialogsElements = props.dialogsPage.dialogData.map(dialog => <DialogItems name = {dialog.name} id = {dialog.id} />);

    let messageElements = props.dialogsPage.messages.map(dialog => <Messages message = {dialog.message} id = {dialog.id} />);

    let newMessageBody = props.dialogsPage.newMessageBody;
    const unSendMessageClick = ()=>{
        props.dispatch(sendMessageCreator());
    }
    return (
        <div className={classes.dialog}>
            <div>
                {dialogsElements}
            </div>
            <div>
                {messageElements}
                <div>
                    <textarea value={newMessageBody}></textarea><br />

                    <button onClick={unSendMessageClick}>Send</button>
                </div>
            </div>
            
        </div>
    );
}
export default Dialog;