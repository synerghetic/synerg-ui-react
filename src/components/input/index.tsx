import React from 'react'
import Icon, { Icons as IconNames } from '../icon'

export type Props = {
    onChange: (value: string) => void
    error?: string
    placeholder?: string
    defaultValue?: string
    value?: string
}

export default ({
    onChange,
    error,
    defaultValue,
    value,
    placeholder,
}: Props) => {
    const hasError = !!error

    return (
        <div className="flex:column">
            <div className="relative">
                <input
                    className={`input${hasError ? '--error' : ''}`}
                    type="text"
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    value={value}
                    onChange={e => {
                        onChange(e.target.value)
                    }}
                />
                {hasError && (
                    <Icon
                        icon={IconNames.Cross}
                        className="input-icon--error"
                    />
                )}
            </div>
            <span className={`error-message ${hasError ? '' : 'hidden'}`}>
                {error}
            </span>
        </div>
    )
}
