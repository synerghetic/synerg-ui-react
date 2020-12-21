import React from 'react'

export type Props = {
    children: string
    uppercase?: boolean
    className?: string
}

export default ({ children, className = '', uppercase = false }: Props) => (
    <p className={`text-current ${className}`}>
        {uppercase ? children.toUpperCase() : children}
    </p>
)
