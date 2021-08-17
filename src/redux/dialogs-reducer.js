const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
    ],
    newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            stateCopy = {
                ...state,
                newMessageBody: action.body
            };
            return stateCopy;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            stateCopy = {
                ...state,
                messages: [...state.messages, {id: 6, message: body}],
                newMessageBody: ''
            }
            return stateCopy;
        default:
            break;
    }
    return state;
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, body: text})

export default dialogsReducer;