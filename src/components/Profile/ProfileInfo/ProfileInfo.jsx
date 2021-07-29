import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.content_pic}>
                <img src="https://cok-niime.ru/images/slider/1.jpg"></img>
            </div>
            <div className={s.descriptionBlock}>
                small ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;