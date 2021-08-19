import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'Its my 1st post', likesCount: 11},
                {id: 3, message: 'Hello', likesCount: 18},
                {id: 4, message: 'post 4', likesCount: 10},
                {id: 5, message: 'post 5', likesCount: 15},
                {id: 6, message: 'post 6', likesCount: 17},
            ],
            newPostText: 'itka'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'name 1'},
                {id: 2, name: 'name 2'},
                {id: 3, name: 'name 3'},
                {id: 4, name: 'name 4'},
                {id: 5, name: 'name 5'},
                {id: 6, name: 'name 6'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you'},
                {id: 3, message: 'Hello'},
                {id: 4, message: 'message 4'},
                {id: 5, message: 'message 5'},
                {id: 6, message: 'message 6'},
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state changed');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}

export default store;

window.store = store;