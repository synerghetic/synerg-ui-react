import React from 'react'
import FileInput from '.'
import { mount } from 'enzyme'

describe('File', () => {
    it('should render', () => {
        const component = mount(<FileInput onChange={() => void 0} />)

        expect(component.html()).toContain('input')
        expect(component.html()).toMatchSnapshot()
    })

    it('should call onChange and update the variable', () => {
        let value: File | undefined = undefined
        const onChange = (newValue: File) => {
            value = newValue
        }

        const component = mount(<FileInput onChange={onChange} />)

        const filename = 'Hello World'

        component.find('input').simulate('change', {
            target: { files: { [0]: { name: filename } } },
        })

        if (!value) throw new Error('value was not updated to a File')

        expect((value as File).name).toBe(filename)
    })

    it('should have an error', () => {
        const error = 'Oh no D:'

        const component = mount(
            <FileInput onChange={() => void 0} error={error} />,
        )

        const html = component.html()

        expect(html).toMatchSnapshot()

        expect(component).toContainMatchingElement('.error-message')
        expect(html).toContain(error)
    })
})
