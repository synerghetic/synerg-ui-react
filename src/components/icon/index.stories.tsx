import IconComponent, { Icon as IconNames } from '.'

export const Icon = IconComponent

const { Brand, Cross } = IconNames

export default {
    title: 'Components/Icon',
    component: IconComponent,
    argTypes: {
        icon: {
            defaultValue: IconNames.Brand,
            control: {
                type: 'select',
                options: [Brand, Cross],
            },
        },
        width: {
            defaultValue: 24,
        },
        height: {
            defaultValue: 24,
        },
        color: {
            defaultValue: '#000',
            control: { type: 'color' },
        },
    },
}
