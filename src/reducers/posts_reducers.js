import _ from 'lodash';

export function deleteOnePost(state = {}, action) {
    switch (action.type) {
        case 'DELETE_ONE_POST':
            return _.omit(state, action.payload);
        default:
            return state;
        }
}
export function fetchOnePost(state = {}, action) {
    switch (action.type) {
        case 'FETCH_ONE_POST':
            return action.payload.data;
        default:
            return state;
    }
}
export function AllPosts(state = {}, action) {
    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }
}        