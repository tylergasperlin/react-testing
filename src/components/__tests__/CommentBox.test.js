import React from 'react';
import CommentBox from '../CommentBox';
import {mount} from 'enzyme';

let wrapped;

// Can also place connect and useSelector in side this
jest.mock("react-redux", () => ({
    // connect: () => jest.fn(),
    // useSelector: jest.fn(fn => fn()),
    useDispatch: () => jest.fn()
}));

beforeEach(() => {
    wrapped = mount(<CommentBox/>)
})

afterEach(() => {
    wrapped.unmount();
})

it('has a text area and abutton', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);

})

describe('the text area', () => {
    beforeEach(() => {
        wrapped.find('textarea').simulate('change', {
            target: { value: 'new comment'}
        })
        // Since we update state and react runs this async we need to force the component to update to make sure the changes are reflected before we assert our test
        wrapped.update();

    })
    it('has a text area that users can type in', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
    })
    
    it('when form is submitted, text area gets emptied', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
        wrapped.find('form').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('')
    
    })

})


