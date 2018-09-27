import React from 'react';

import Layout from '../../src/components/Layout';

import {
    renderIntoDocument,
    findRenderedDOMComponentWithClass,
    findRenderedComponentWithType,
    Simulate
} from 'react-dom/test-utils';

import Paragraph from "../../src/components/Paragraph";

describe('verify_pack.View [Verify]', function () {
    it('should add wrong input to paragraph below form', function () {
        const layout = renderIntoDocument(<Layout/>);

        const button = findRenderedDOMComponentWithClass(layout,'btn-success');

        Simulate.submit(button);

        const paragraph = findRenderedComponentWithType(layout, Paragraph);

        expect(paragraph.props.content).to.equal('Wrong input!');
    });

    it('should return right result for addition', function () {
        const layout = renderIntoDocument(<Layout/>);

        const button = findRenderedDOMComponentWithClass(layout,'btn-success');
        const inputField = findRenderedDOMComponentWithClass(layout, 'form-control');

        inputField.value = '1.48+2.59';

        Simulate.change(inputField);

        Simulate.submit(button);

        const paragraph = findRenderedComponentWithType(layout, Paragraph);

        expect(paragraph.props.content).to.equal('1.48 + 2.59 = 4.07');
    });

    it ('should return right result for subtraction', function () {
        const layout = renderIntoDocument(<Layout/>);

        const button = findRenderedDOMComponentWithClass(layout,'btn-success');
        const inputField = findRenderedDOMComponentWithClass(layout, 'form-control');

        inputField.value = '1512.756-2';

        Simulate.change(inputField);

        Simulate.submit(button);

        const paragraph = findRenderedComponentWithType(layout, Paragraph);

        expect(paragraph.props.content).to.equal('1512.756 - 2 = 1510.756');
    });

    it ('should return right result for multiplication', function () {
        const layout = renderIntoDocument(<Layout/>);

        const button = findRenderedDOMComponentWithClass(layout,'btn-success');
        const inputField = findRenderedDOMComponentWithClass(layout, 'form-control');

        inputField.value = '89436.75*2.5';

        Simulate.change(inputField);

        Simulate.submit(button);

        const paragraph = findRenderedComponentWithType(layout, Paragraph);

        expect(paragraph.props.content).to.equal('89436.75 * 2.5 = 223591.875');
    });

    it ('should return right result for division', function () {
        const layout = renderIntoDocument(<Layout/>);

        const button = findRenderedDOMComponentWithClass(layout,'btn-success');
        const inputField = findRenderedDOMComponentWithClass(layout, 'form-control');

        inputField.value = '89436.75/2.5';

        Simulate.change(inputField);

        Simulate.submit(button);

        const paragraph = findRenderedComponentWithType(layout, Paragraph);

        expect(paragraph.props.content).to.equal('89436.75 / 2.5 = 35774.7');
    });
});
