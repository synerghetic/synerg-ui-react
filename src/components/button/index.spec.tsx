import React from 'react'
import Button from '.'
import { mount } from 'enzyme'

describe('Button', () => {
    it('should render', () => {
        const component = mount(<Button>Hello World</Button>)

        expect(component.html()).toContain('button')
        expect(component.html()).toMatchSnapshot()
    })

    it('should have the primary class', () => {
        const component = mount(<Button>Hello World</Button>)

        expect(component.find('button')).toHaveClassName('button--primary')
    })

    it('should call onClick one time', () => {
        const onClick = jest.fn()

        const component = mount(<Button onClick={onClick}>Hello World</Button>)

        component.simulate('click')

        expect(onClick.mock.calls.length).toBe(1)
    })
})
