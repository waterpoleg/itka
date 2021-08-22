import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return (<Preloader/>)
    }
    return (
        <div>
            {/*<div className={s.content_pic}>
                <img src="https://cok-niime.ru/images/slider/1.jpg"></img>
            </div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt='' />
                <div>
                    <p><b>Full name:</b> {props.profile.fullName}</p>
                    <p><b>About:</b> {props.profile.aboutMe}</p>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default ProfileInfo;