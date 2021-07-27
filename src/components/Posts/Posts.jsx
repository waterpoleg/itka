import Post from './Post/Post';
import s from './Posts.module.css';

const Posts = () => {
    return (
        <div>
            Posts
            <div>
                <textarea></textarea>
                <button>Add record</button>
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you?' likesCount='0'/>
                <Post message='Its my 1st post' likesCount='23' />
            </div>
        </div>
    )
}

export default Posts;