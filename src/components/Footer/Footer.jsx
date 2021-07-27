import s from './Footer.module.css'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className={s.footer}>
            <a href="https://cok-niime.ru">COK-NIIME</a> {currentYear}
        </div>
    )
}

export default Footer;