import React from 'react'

export type Props = {
    children: string
    uppercase?: boolean
    className?: string
}

export default ({ children, className = '', uppercase = false }: Props) => (
    <h2 className={`text-subtitle ${className}`}>
        {uppercase ? children.toUpperCase() : children}
    </h2>
)
