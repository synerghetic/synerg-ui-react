import React, { ReactElement } from 'react'

export type Props = {
    children: ReactElement
    className?: string
}

export default ({ children, className = '' }: Props) => (
    <p className={`text-current ${className}`}>{children}</p>
)
