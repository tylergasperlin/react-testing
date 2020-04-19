import React from 'react';
import CommentBox from './CommentBox';
import {mount} from 'enzyme';

let wrapped;

beforeEach(() => {
    wrapped = mount(<CommentBox/>)
})

afterEach(() => {
    wrapped.unmount();
})

it('has a text area and abutton', () => {
    console.log(wrapped.find('button'))
    console.log(wrapped.find('textarea'))
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);

})

