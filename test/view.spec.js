import React from 'react';

import Layout from '../src/components/Layout';

import {
    renderIntoDocument,
    findRenderedDOMComponentWithClass,
    scryRenderedComponentsWithType,
    findRenderedComponentWithType,
    isElementOfType,
    Simulate
} from 'react-dom/test-utils';

import Paragraph from "../src/components/Paragraph";

describe('View', function () {
    it('should render layout with Layout component', function () {
        const isLayoutComponent = isElementOfType(<Layout/>, Layout);

        expect(isLayoutComponent).to.be.ok;
    });

    it('should be one Paragraph component on the page', function () {
        const paragraph = scryRenderedComponentsWithType(renderIntoDocument(<Layout/>), Paragraph);

        expect(paragraph.length).to.equal(1);
    });

    it('should return right result for addition', function () {
        const layout = renderIntoDocument(<Layout/>);

        const button = findRenderedDOMComponentWithClass(layout,'btn-success');
        const inputField = findRenderedDOMComponentWithClass(layout, 'form-control');

        inputField.value = '1.28+2.89';

        Simulate.change(inputField);

        Simulate.submit(button);

        const paragraph = findRenderedComponentWithType(layout, Paragraph);

        expect(paragraph.props.content).to.equal('1.28 + 2.89 = 4.17');
    });

    it ('should render "Wrong input!" in paragraph when wrong input given', function () {
        const layout = renderIntoDocument(<Layout/>);

        const button = findRenderedDOMComponentWithClass(layout,'btn-success');
        const inputField = findRenderedDOMComponentWithClass(layout, 'form-control');

        inputField.value = 'string';

        Simulate.change(inputField);

        Simulate.submit(button);

        const paragraph = findRenderedComponentWithType(layout, Paragraph);

        expect(paragraph.props.content).to.equal('Wrong input!');
    });
});
