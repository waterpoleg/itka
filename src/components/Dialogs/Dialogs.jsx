import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'name 1'},
        {id: 2, name: 'name 2'},
        {id: 3, name: 'name 3'},
        {id: 4, name: 'name 4'},
        {id: 5, name: 'name 5'},
        {id: 6, name: 'name 6'},
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Hello'},
        {id: 4, message: 'message 4'},
        {id: 5, message: 'message 5'},
        {id: 6, message: 'message 6'},
    ]

    let dialogsElements = dialogs.map(dlg => (<DialogItem name={dlg.name} id={dlg.id}/>));
    let messagesElements = messages.map(msg => (<Message message={msg.message}/>));

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;