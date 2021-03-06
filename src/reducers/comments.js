import { ADD_COMMENT } from '../actions/types';

export default function(state = [], action={}){
    switch (action.type){
        case ADD_COMMENT:
            return [...state, action.payload];
        default:
            return state;
    }
}
