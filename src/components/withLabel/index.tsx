import React, { ReactNode } from 'react'

type Props = {
    label: string
    hasError: boolean
    children: ReactNode
}

export default ({ children, label, hasError }: Props) => (
    <div className="input-with-label-container">
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
