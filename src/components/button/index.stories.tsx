import React from 'react'
import ButtonComponent, { Appearance } from '.'

import type { Props } from '.'

type args = Props & {
    label: string
}

export const Button = ({ label, appearance, onClick }: args) => (
    <ButtonComponent appearance={appearance} onClick={onClick}>
        {label}
    </ButtonComponent>
)

export default {
    title: 'Components/Button',
    component: ButtonComponent,
    argTypes: {
        label: {
            type: { name: 'string', required: true },
            defaultValue: 'Hello World',
        },
        appearance: {
            defaultValue: Appearance.Primary,
            control: {
                type: 'select',
                options: Object.values(Appearance),
            },
        },
        onClick: { action: 'onClick' },
    },
}
