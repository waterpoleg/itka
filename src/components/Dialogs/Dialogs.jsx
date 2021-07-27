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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="name 1" id="1"/>
                <DialogItem name="name 2" id="2"/>
                <DialogItem name="name 3" id="3"/>
                <DialogItem name="name 4" id="4"/>
                <DialogItem name="name 5" id="5"/>
                <DialogItem name="name 6" id="6"/>
            </div>
            <div className={s.messages}>
                <div>
                    <Message message="Hi"/>
                    <Message message="How are you"/>
                    <Message message="Hello"/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;