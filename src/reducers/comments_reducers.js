import _ from 'lodash';

export function FetchComments(state = {}, action) {
    switch (action.type) {
        case 'FETCH_COMMENTS':
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}        