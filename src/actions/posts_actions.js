export function fetchPosts(result) {
    return {
        type: 'FETCH_POSTS',
        payload: result
    };
}
export function deleteOnePost(result) {
    return {
        type: 'DELETE_ONE_POST',
        payload: result
    };
}
export function fetchOnePost(result) {
    return {
        type: 'FETCH_ONE_POST',
        payload: result
    };
}