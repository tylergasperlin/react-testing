import React from 'react';
import App from './App';
import { shallow } from 'enzyme'
import CommentBox from './CommentBox'


it('Shows a comment box', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find(CommentBox).length).toEqual(1);


})