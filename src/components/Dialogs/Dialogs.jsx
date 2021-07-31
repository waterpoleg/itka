import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'name 1'},
        {id: 2, name: 'name 2'},
        {id: 3, name: 'name 3'},
        {id: 4, name: 'name 4'},
        {id: 5, name: 'name 5'},
        {id: 6, name: 'name 6'},
    ]

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Hello'},
        {id: 4, message: 'name 4'},
        {id: 5, message: 'name 5'},
        {id: 6, message: 'name 6'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
            </div>
            <div className={s.messages}>
                <div>
                    <Message message={messagesData[0].message} id={messagesData[0].id} />
                    <Message message={messagesData[1].message} id={messagesData[1].id} />
                </div>
            </div>
        </div>
    )
}

export default Dialogs;