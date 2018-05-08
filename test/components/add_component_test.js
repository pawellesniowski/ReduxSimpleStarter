import { renderComponent, expect } from "../test_helper";
import { AddComponent } from '../../src/components/AddComponent/add.component';

describe('AddComponent', () => {
    let component;
    beforeEach(function() {
        component = renderComponent(AddComponent);
    });

    it('has a text area', () => {
        expect(component.find('textarea')).to.exist;
    });

    it('has a button', () => {
        expect(component.find('input')).to.have.prop('type').match(/submit/);
    });

    describe('entering some text', () => {

        beforeEach(()=>{
            component.find('textarea').simulate('change', 'new comment')
        });

        it('shows that text in the text area', () => {
            expect(component.find('textarea')).to.have.value('new comment');
        });

        it('when submitted, clears the input', () => {
            component.simulate('submit');
            expect(component.find('textarea')).to.have.value('');
        });
    })


});
