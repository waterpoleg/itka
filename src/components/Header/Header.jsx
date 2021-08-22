import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://cok-niime.ru/images/logo.png" alt="Main Logo"/>
            {/*<div className={s.header_image}>*/}
                <div className={s.loginBlock}>
                    {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
                </div>
        </header>
    )
}

export default Header;