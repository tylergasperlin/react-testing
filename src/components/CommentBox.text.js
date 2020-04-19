import React from 'react';
import CommentBox from './CommentBox';
import {mount} from 'enzyme';

it('has a text area and abutton', () => {
    const wrapped = mount(<CommentBox/>)
    console.log(wrapped.find('button'))
    console.log(wrapped.find('textarea'))
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);

})

