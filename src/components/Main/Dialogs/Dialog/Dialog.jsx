import DialogItems from "./DialogItems/DialogItems";

const Dialog = (props) => {

    let dialogsElements = props.dialogData.map(dialog => <DialogItems name = {dialog.name} id = {dialog.id} />);

    return (
        <div>
            <div className="chat">
                {dialogsElements}
            </div>
        </div>
    );
}
export default Dialog;