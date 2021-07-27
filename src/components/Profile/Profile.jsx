import s from './Profile.module.css';
import Posts from '../Posts/Posts';

const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.content_pic}>
                <img src="https://cok-niime.ru/images/slider/1.jpg"></img>
            </div>
            <div>avatar</div>
            <Posts />
        </div>
    );
}

export default Profile;