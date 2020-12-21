import React from 'react'
import Input from '.'
import { mount } from 'enzyme'

describe('Input', () => {
    it('should render', () => {
        const component = mount(<Input onChange={() => void 0} />)

        expect(component.html()).toContain('input')
        expect(component.html()).toMatchSnapshot()
    })

    it('should call onChange and update the variable', () => {
        let value = ''
        const onChange = (newValue: string) => {
            value = newValue
        }

        const component = mount(<Input onChange={onChange} />)

        const changeValue = 'Hello World'

        component
            .find('input')
            .simulate('change', { target: { value: changeValue } })

        expect(value).toBe(changeValue)
    })

    it('should have an error', () => {
        const error = 'Oh no D:'

        const component = mount(<Input onChange={() => void 0} error={error} />)

        const html = component.html()

        expect(html).toMatchSnapshot()

        expect(component).toContainMatchingElement('.error-message')
        expect(component).toContainMatchingElement('.input-icon--error')
        expect(html).toContain(error)
    })
})
