import s from './Post.module.css';

const Post = (post) => {
    return (
        <div className={s.item}>
            { post.message }
            <div>
                <span>like</span> { post.likesCount }
            </div>
        </div>
    )
}

export default Post;