const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";


const store = {
    _state: {
        profilePage: {
            newPostText: "",
            postData: [
                { post: "hello", id: 4 },
                { post: "hello friends", id: 3 },
                { post: "привет", id: 2 },
                { post: "салют", id: 1 },
                { post: "здарова", id: 0 },
            ]
        },
        dialogsPage: {
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
        },
    },
    getState() {
        return this._state;
    },
    _callSubscribe() {
        console.log("");
    },
    subscribe(observer) {
        this._callSubscribe = observer;
    },
    dispatch(action) {
        switch (action.type) {
            case ADD_POST:
                let newPost = {
                    post: this._state.profilePage.newPostText,
                    id: this._state.profilePage.postData[0].id + 1,
                }
                this._state.profilePage.postData.unshift(newPost);
                this._state.profilePage.newPostText = "";
                this._callSubscribe(this._state);
                break;
            case UPDATE_NEW_POST_TEXT:
                this._state.profilePage.newPostText = action.newPostText;
                this._callSubscribe(this._state);
                break;
            case UPDATE_NEW_MESSAGE_BODY:
                this._state.dialogsPage.newMessageBody = action.body;
                this._callSubscribe(this._state);
                break;
            case SEND_MESSAGE:
                let newMessage = {
                    message: this._state.dialogsPage.newMessageBody,
                    id: this._state.dialogsPage.messages[0].id + 1,
                }
                this._state.dialogsPage.messages.unshift(newMessage);
                this._state.dialogsPage.newMessageBody = "";
                this._callSubscribe(this._state);
                break;
        }
    }
};


export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    }
}

export const updateNewPostTextActionCreator = text => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPostText: text,
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

export default store;
