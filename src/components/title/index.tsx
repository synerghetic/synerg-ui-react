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

export default ({ children, font = Font.Leitura, className = '' }: Props) => (
    <h1 className={`text-title font-${font.toLowerCase()} ${className}`}>
        {children}
    </h1>
)
