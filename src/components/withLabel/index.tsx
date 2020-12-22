import React, { ReactNode } from 'react'

type Props = {
    label: string
    hasError: boolean
    children: ReactNode
    className?: string
}

export default ({ children, label, hasError, className = '' }: Props) => (
    <div className={`input-with-label-container ${className}`}>
        <label>
            <span
                className={`label inline-block ${
                    hasError ? 'text-red-500' : ''
                }`}
            >
                {label}
            </span>
            {children}
        </label>
    </div>
)
