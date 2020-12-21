import React from 'react'
import Icon, { Icon as IconNames } from '../icon'

export type Props = {
    options: string[]
    onChange: (value: string) => void
    error?: string
}

export default ({ onChange, error, options }: Props) => {
    const hasError = !!error

    return (
        <div className="flex:column">
            <div className="relative">
                <select
                    name="aze"
                    style={{ width: '100%' }}
                    className={`select input${hasError ? '--error' : ''}`}
                    onChange={e => {
                        onChange(e.target.value)
                    }}
                >
                    {options?.map(option => (
                        <option key={option}>{option}</option>
                    ))}
                </select>
                <Icon icon={IconNames.AngleDown} className="input-icon" />
            </div>
            <span className={`error-message ${hasError ? '' : 'hidden'}`}>
                {error}
            </span>
        </div>
    )
}
