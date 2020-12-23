import React from 'react'

export enum Font {
    Leitura = 'Leitura',
    Geomanist = 'Geomanist',
}

export type Props = {
    children: string
    className?: string
    font?: Font
}

const Title = ({ children, font = Font.Leitura, className = '' }: Props) => (
    <h1 className={`text-title font-${font.toLowerCase()} ${className}`}>
        {children}
    </h1>
)

Title.Font = Font

export default Title
