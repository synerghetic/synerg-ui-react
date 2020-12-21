import React from 'react'
import WithLabelComponent from '.'
import Select from '../select'

type Args = {
    label: string
    error: string
}

export const WithLabel = ({ label, error }: Args) => (
    <WithLabelComponent label={label} hasError={!!error}>
        <Select error={error} options={['Hello', 'World']} onChange={() => 0} />
    </WithLabelComponent>
)

export default {
    title: 'Components/Inputs/With Label',
    component: WithLabelComponent,
    argTypes: {
        label: {
            type: 'string',
            defaultValue: 'Label',
        },
        error: {
            type: 'string',
        },
    },
}
