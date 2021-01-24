

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
            dialogData: [
                { name: "Vasya", id: 1 },
                { name: "Vasy", id: 2 },
                { name: "Vas", id: 3 },
                { name: "Va", id: 4 },
                { name: "V", id: 5 }
            ],
        },
    },
    getState() {
        return this._state;
    },
    _callSubscribe() {
        console.log("");
    },
    addPost() {
        let newPost = {
            post: this._state.profilePage.newPostText,
            id: this._state.profilePage.postData[0].id + 1,
        }
        this._state.profilePage.postData.unshift(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscribe(this._state);
    },
    updateNewPostText(newPostText) {
        this._state.profilePage.newPostText = newPostText;
        this._callSubscribe(this._state);
    },
    subscribe(observer) {
        this._callSubscribe = observer;
    },
}

export default store;
