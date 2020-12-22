import React from 'react'
import TitleComponent from '.'
import { Colors, colorToTextClassName } from '../../utils'

type args = { text: string; className: string; color: Colors }

export const Title = ({ text, className, color }: args) => (
    <TitleComponent
        className={(className ?? '').concat(` ${colorToTextClassName(color)}`)}
    >
        {text}
    </TitleComponent>
)

export default {
    title: 'Components/Texts/Title',
    component: TitleComponent,
    argTypes: {
        text: {
            type: { name: 'string' },
            defaultValue: 'Hello World',
        },
        className: {
            type: { name: 'string' },
        },
        color: {
            control: {
                type: 'select',
                options: Object.values(Colors),
            },
        },
    },
}
