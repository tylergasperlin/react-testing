import React from 'react'
import { mount } from 'enzyme';
import Root from '../../Root';
import App from '../../components/App'

it('cant fetch a list of comments and display them', () => {
    // Render the app
    const wrapped = mount(
        <Root>
            <App/>
        </Root>
    )
    // Fetch comments
    wrapped.find('.fetch-comments').simulate('click')
    // expect to find a list of comments
    expect(wrapped.find('li').length).toEqual(500);
})