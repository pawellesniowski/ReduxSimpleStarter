import { expect } from '../test_helper';
import { ADD_COMMENT } from '../../src/actions/types';
import { addComment } from '../../src/actions';

describe('Actions', () => {

    describe('saveComment', () => {
        it('has the correct type', () => {
            expect(addComment().type).to.equal(ADD_COMMENT);
        });

        it('has the correct payload', () => {
            const action = addComment('text');
            expect(action.payload).to.equal('text');
        });

    });

});
