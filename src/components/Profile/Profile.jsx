import s from './Profile.module.css';
import Posts from '../Posts/Posts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <Posts posts={props.profilePage.posts}
                   newPostText={props.profilePage.newPostText}
                   updateNewPostText={props.updateNewPostText}
                   addPost={props.addPost}/>
        </div>
    );
}

export default Profile;