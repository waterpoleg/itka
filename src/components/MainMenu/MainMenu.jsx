import s from './MainMenu.module.css';
import {NavLink} from "react-router-dom";

const MainMenu = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
                {/*<a href="/profile">Profile</a>*/}
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
                {/*<a href="/dialogs">Messages</a>*/}
            </div>
            <div>
                <a>News</a>
            </div>
            <div>
                <a>Music</a>
            </div>
            <div>
                <a>Settings</a>
            </div>
        </nav>);
}

export default MainMenu;