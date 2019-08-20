import { combineReducers } from 'redux';
import { AllPosts, deletePost, fetchOnePost } from "./posts_reducers";
import { Isloading } from "./common_reducers";
import { FetchComments } from "./comments_reducers";
//import { reducer as formReducer } from 'redux-form';
//import PostsReducer from './reducer_posts';

export default combineReducers({
    AllPosts,
    fetchOnePost
});