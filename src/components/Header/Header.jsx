import s from './Header.module.css';

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.header_image}>
                <img src="https://cok-niime.ru/images/logo.png" alt="Main Logo"/>
            </div>
        </div>
    )
}

export default Header;