import { ADD_COMMENT } from './types.js'

export function addComment(comment) {
    console.log('action', comment);
    return {
        type: ADD_COMMENT,
        payload: comment
    };
}
