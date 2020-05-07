import React from 'react'
import { mount } from 'enzyme';
import Root from '../../Root';
import App from '../../components/App'
import moxios from 'moxios';

beforeEach(() => {
    moxios.install();
    moxios.stubRequest('https:/jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{name: 'Fetched #1'}, {name: 'Fetched #2'}]
    })
})

afterEach(() => {
    moxios.uninstall();
})

it('cant fetch a list of comments and display them', (done) => {
    // Render the app
    const wrapped = mount(
        <Root>
            <App/>
        </Root>
    )
    // Fetch comments
    wrapped.find('.fetch-comments').simulate('click')

    setTimeout(() => {
        wrapped.update()
        expect(wrapped.find('li').length).toEqual(2);
        done()
        wrapped.unmount()
    }, 100);
    // expect to find a list of comments
})