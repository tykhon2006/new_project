import { sendMessageCreator, updateNewMessageBodyCreator } from "../../../../redux/dialogReducer";
import DialogItems from "./DialogItems/DialogItems";
import Messages from "./DialogItems/Messages";
import classes from "./Dialog.module.css";

const Dialog = (props) => {

    let dialogsElements = props.dialogsPage.dialogData.map(dialog => <DialogItems name = {dialog.name} id = {dialog.id} />);

    let messageElements = props.dialogsPage.messages.map(dialog => <Messages message = {dialog.message} id = {dialog.id} />);

    let newMessageBody = props.dialogsPage.newMessageBody;
    
    const onSendMessageClick = ()=>{
        props.dispatch(sendMessageCreator());
    }

    const onNewMessageChanges = (e)=>{
        let body = e.target.value;
        props.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <div className={classes.dialog}>
            <div>
                {dialogsElements}
            </div>
            <div>
                {messageElements}
                <div>
                    <textarea onChange={onNewMessageChanges} value={newMessageBody}></textarea><br />

                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
            
        </div>
    );
}
export default Dialog;