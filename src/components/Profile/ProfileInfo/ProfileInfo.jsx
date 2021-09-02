import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return (<Preloader/>)
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt='' />
                <div>
                    <p><b>Full name:</b> {props.profile.fullName}</p>
                    <p><b>About:</b> {props.profile.aboutMe}</p>
                    {/*<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>*/}
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default ProfileInfo;