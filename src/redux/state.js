import {rendererEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'Its my 1st post', likesCount: 11},
            {id: 3, message: 'Hello', likesCount: 18},
            {id: 4, message: 'post 4', likesCount: 10},
            {id: 5, message: 'post 5', likesCount: 15},
            {id: 6, message: 'post 6', likesCount: 17},
        ]
    },

    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you'},
            {id: 3, message: 'Hello'},
            {id: 4, message: 'message 4'},
            {id: 5, message: 'message 5'},
            {id: 6, message: 'message 6'},
        ],
        dialogs: [
            {id: 1, name: 'name 1'},
            {id: 2, name: 'name 2'},
            {id: 3, name: 'name 3'},
            {id: 4, name: 'name 4'},
            {id: 5, name: 'name 5'},
            {id: 6, name: 'name 6'},
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    rendererEntireTree(state);
}

export default state;