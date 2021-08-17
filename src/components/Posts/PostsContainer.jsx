import Post from './Post/Post';
import React from "react";
import {addPostActionCreator, updateNewPostActionCreator} from "../../redux/profile-reducer";
import Posts from "./Posts";
import StoreContext from "../../StoreContext";

const PostsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                    }
                    let onPostChange = (text) => {
                        let action = updateNewPostActionCreator(text);
                        store.dispatch(action);
                    }
                    return <Posts updateNewPostText={onPostChange}
                                  addPost={addPost}
                                  posts={state.profileReducer.posts}
                                  newPostTExt={state.profileReducer.newPostText}
                    />
                }
            }
        </StoreContext.Consumer>
    )
}

export default PostsContainer;