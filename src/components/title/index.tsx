import React from 'react'

export type Props = {
    children: string
    className?: string
}

export default ({ children, className = '' }: Props) => (
    <h1 className={`text-title ${className}`}>{children}</h1>
)
