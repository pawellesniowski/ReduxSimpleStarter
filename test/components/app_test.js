import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';


describe('App', () => {
    let component;
    beforeEach(()=>{
        component = renderComponent(App);
    });

    it('displays AddComponent', () => {
        expect(component.find('.add-component-wrapper')).to.exist;
    });

    it('displays ListComponent', () => {
        expect(component.find('.list-component-wrapper')).to.exist;
    });

});


