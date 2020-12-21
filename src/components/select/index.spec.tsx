import React from 'react'
import Select from '.'
import { mount } from 'enzyme'

describe('Select', () => {
    const options = ['Hello', 'World']

    it('should render', () => {
        const component = mount(
            <Select onChange={() => void 0} options={options} />,
        )

        const html = component.html()
        expect(html).toContain('select')

        for (let i = 0; i < options.length; i++) {
            expect(html).toContain(options[i])
        }

        expect(component.html()).toMatchSnapshot()
    })

    it('should call onChange and update the variable', () => {
        let value = ''
        const onChange = (newValue: string) => {
            value = newValue
        }

        const component = mount(
            <Select onChange={onChange} options={options} />,
        )

        component
            .find('select')
            .simulate('change', { target: { value: options[0] } })

        expect(value).toBe(options[0])
    })

    it('should have an error', () => {
        const error = 'Oh no D:'

        const component = mount(
            <Select onChange={() => void 0} error={error} options={options} />,
        )

        const html = component.html()

        expect(html).toMatchSnapshot()

        expect(component).toContainMatchingElement('.error-message')
        expect(html).toContain(error)
    })
})
