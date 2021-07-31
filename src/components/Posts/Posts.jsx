import Post from './Post/Post';
import s from './Posts.module.css';

const Posts = () => {

    let posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'Its my 1st post', likesCount: 11},
        {id: 3, message: 'Hello', likesCount: 18},
        {id: 4, message: 'post 4', likesCount: 10},
        {id: 5, message: 'post 5', likesCount: 15},
        {id: 6, message: 'post 6', likesCount: 17},
    ]

    let postsElements = posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

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
                {postsElements}
            </div>
        </div>
    )
}

export default Posts;