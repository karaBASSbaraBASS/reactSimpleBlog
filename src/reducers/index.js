import { combineReducers } from 'redux';
import { AllPosts, deletePost, fetchOnePost } from "./posts_reducers";
import { Isloading } from "./common_reducers";
import { commentCreated } from "./comments_reducers";
//import { reducer as formReducer } from 'redux-form';
//import PostsReducer from './reducer_posts';

export default combineReducers({
    Isloading,
    AllPosts,
    fetchOnePost,
    commentCreated
});