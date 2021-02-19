const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    newPostText: "hello",
            postData: [
                { post: "hello", id: 4 },
                { post: "hello friends", id: 3 },
                { post: "привет", id: 2 },
                { post: "салют", id: 1 },
                { post: "здарова", id: 0 },
            ]
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                post: state.newPostText,
                id: state.postData[0].id + 1,
            }
            state.postData.unshift(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText;
            return state;
        default:
            return state;
    }

}



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


export default profileReducer;