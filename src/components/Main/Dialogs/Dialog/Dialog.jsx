


const Dialog = () => {
    let dialogData = [
        { Name: "Vasya", id: 1 },
        { Name: "Vasya", id: 2 },
        { Name: "Vasya", id: 3 },
        { Name: "Vasya", id: 4 },
        { Name: "Vasya", id: 5 },
        { Name: "Vasya", id: 6 },
        { Name: "Vasya", id: 7 },
        { Name: "Vasya", id: 8 },
        { Name: "Vasya", id: 9 }
    ];
    return (
        <div>
            <div className="chat">
                <input type="text" placeholder="Написать сообщение..." className="mainChat"></input>
                <a href="#" className="send">Send</a>
            </div>
        </div>
    );
}
export default Dialog;