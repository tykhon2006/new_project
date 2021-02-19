import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";

const store = {
    _state: {
        profilePage: {
            newPostText: "hello",
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action) ;
        this._callSubscribe(this._state);
    }
};




export default store;
