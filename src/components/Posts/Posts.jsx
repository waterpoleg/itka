import Post from './Post/Post';
import s from './Posts.module.css';

const Posts = () => {

    let postData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'Its my 1st post', likesCount: 11},
        {id: 3, message: 'Hello', likesCount: 12},
        {id: 4, message: 'name 4'},
        {id: 5, message: 'name 5'},
        {id: 6, message: 'name 6'},
    ]

    return (
        <div className={s.postsBlock}>
            <h3>Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add record</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
            </div>
        </div>
    )
}

export default Posts;