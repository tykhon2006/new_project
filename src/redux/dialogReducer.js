const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

let initialState = {
    newMessageBody: "hello my friend",
    dialogData: [
        { name: "Vasya", id: 1 },
        { name: "John", id: 2 },
        { name: "Evgeniy", id: 3 },
        { name: "Dima", id: 4 },
        { name: "Vova", id: 5 }
    ],
    messages: [
        { message: "hello, World", id: 0 },
        { message: "hello", id: 1 },
        { message: "hello!", id: 2 },
        { message: "hello,", id: 3 },
        { message: "hello.", id: 4 },
        { message: " World", id: 5 },
        { message: ", World", id: 6 },
        { message: "! World", id: 7 },
    ]
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let newMessage = {
                message: state.newMessageBody,
                id: state.messages[0].id + 1,
            }
            state.messages.unshift(newMessage);
            state.newMessageBody = "";
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE,
    }
}

export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body,
    }
}
export default dialogReducer;