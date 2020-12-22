import React from 'react'
import SubtitleComponent from '.'
import { Colors, colorToTextClassName } from '../../utils'

type args = {
    text: string
    className: string
    color: Colors
    uppercase: boolean
}

export const Subtitle = ({ text, className, color, uppercase }: args) => (
    <SubtitleComponent
        uppercase={uppercase}
        className={(className ?? '').concat(` ${colorToTextClassName(color)}`)}
    >
        {text}
    </SubtitleComponent>
)

export default {
    title: 'Components/Texts/Subtitle',
    component: SubtitleComponent,
    argTypes: {
        text: {
            type: 'string',
            defaultValue: 'Hello World',
        },
        uppercase: {
            type: 'boolean',
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
