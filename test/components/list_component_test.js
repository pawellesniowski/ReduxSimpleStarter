import { renderComponent, expect } from "../test_helper";
import ListComponent from '../../src/components/ListComponent/list.component';

describe('ListComponent', () => {

    let component;
    let props;

    beforeEach(() => {
        props =  { comments: ['asd', 'comment2', 'other ner coment', 'test222'] };
        component = renderComponent(ListComponent, null, props);
    });

    it('Shows an LI for each comment', () => {
        expect(component.find('li').length).to.equal(props.comments.length);
    });

    it('Shows all the comments that provided', () => {
        expect(component).to.contain(props.comments[0]);
        expect(component).to.contain(props.comments[1]);
    });

});

