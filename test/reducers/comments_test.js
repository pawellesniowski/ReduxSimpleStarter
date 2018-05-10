import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { ADD_COMMENT } from '../../src/actions/types';

describe('commentReducer', () => {
    it('handles action with unknown type', () => {
        expect(commentReducer()).to.eql([]);
    });

    it('handles action of type ADD_COMENT', () => {
        const action = {
            type: ADD_COMMENT,
            payload: 'comment'
        };
        expect(commentReducer([], action)).to.eql(['comment']);

    });

});
