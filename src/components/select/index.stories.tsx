import SelectComponent from '.'

export const Select = SelectComponent

export default {
    title: 'Components/Inputs/Select',
    component: SelectComponent,
    argTypes: {
        options: {
            type: 'array',
            defaultValue: ['Hello', 'World'],
        },
        error: {
            type: 'string',
        },
        onChange: { action: 'onChange' },
    },
}
