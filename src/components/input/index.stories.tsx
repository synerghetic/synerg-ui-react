import InputComponent from '.'

export const Text = InputComponent

export default {
    title: 'Components/Inputs/Text',
    component: InputComponent,
    argTypes: {
        placeholder: {
            type: { name: 'string' },
            defaultValue: 'Placeholder',
        },
        value: {
            type: { name: 'string' },
        },
        defaultValue: {
            type: { name: 'string' },
            defaultValue: 'Hello World',
        },
        error: {
            type: { name: 'string' },
        },
        onChange: { action: 'onChange' },
    },
}
