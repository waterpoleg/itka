import Post from './Post/Post';
import React from "react";
import {addPostActionCreator, updateNewPostActionCreator} from "../../redux/profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";

/*const PostsContainer = (props) => {
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
}*/

const mapStateToProps = (state) => {
    return {
        /*posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText*/
        posts: state.profileReducer.posts,
        newPostText: state.profileReducer.newPostText
    }
}

const mapDispatchToProps = (dispath) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostActionCreator(text);
            dispath(action);
        },
        addPoat: () => {
            dispath(addPostActionCreator());
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;