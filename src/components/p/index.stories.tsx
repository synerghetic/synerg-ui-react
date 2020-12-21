import React from 'react'
import PComponent from '.'

type args = {
    text: string
    className: string
}

export const Paragraph = ({ text, className }: args) => (
    <PComponent className={className ?? ''}>{text}</PComponent>
)

export default {
    title: 'Components/Texts/Paragraph',
    component: PComponent,
    argTypes: {
        text: {
            type: 'string',
            defaultValue:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas sit amet eros consectetur interdum. Nam viverra facilisis dui, non commodo leo aliquam vitae. Vivamus tristique tristique enim, non bibendum ex mollis ullamcorper. Fusce bibendum, felis at tincidunt interdum, dui nunc ornare ex, quis fringilla orci tortor eu urna. Praesent dignissim tempor quam et vestibulum. In sollicitudin sem lectus, id semper orci hendrerit ut. Nam nibh justo, vehicula eget dolor ac, consequat consequat nibh. Cras pellentesque ipsum magna, ut dignissim neque pretium commodo.',
        },
        className: {
            type: { name: 'string' },
        },
    },
}
