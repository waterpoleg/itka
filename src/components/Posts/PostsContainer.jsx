import Post from './Post/Post';
import React from "react";
import {addPostActionCreator, updateNewPostActionCreator} from "../../redux/profile-reducer";
import Posts from "./Posts";

const PostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        let action = updateNewPostActionCreator(text);
        props.store.dispatch(action);
    }

    return (
        <Posts updateNewPostText={onPostChange}
               addPost={addPost}
               posts={state.profileReducer.posts}
               newPostTExt={state.profileReducer.newPostText}
        />
    )
}

export default PostsContainer;