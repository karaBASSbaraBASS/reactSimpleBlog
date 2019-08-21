import _ from 'lodash';

export function FetchComments(state = {}, action) {
    switch (action.type) {
        case 'FETCH_COMMENTS':
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}    
export function commentCreated(state = {}, action) {
    switch (action.type) {
        case 'CREATE_COMMENT':
            return action.payload;
        default:
            return state;
    }
}    

