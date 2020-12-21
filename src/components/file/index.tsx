import React from 'react'
import Icon, { Icons as IconNames } from '../icon'

export type Props = {
    onChange: (value: File) => void
    error?: string
}

export default ({ onChange, error }: Props) => {
    const hasError = !!error

    const [filename, setFilename] = React.useState('Joindre un fichier')

    return (
        <div className="flex:column">
            <div className="relative">
                <label
                    className={`inline-block input${hasError ? '--error' : ''}`}
                >
                    <input
                        type="file"
                        className="remove"
                        onChange={e => {
                            if (!e.target.files) return

                            const file = e.target.files[0]
                            onChange(file)

                            setFilename(file.name)
                        }}
                        accept="application/pdf,image/*"
                    />

                    {filename}

                    <Icon icon={IconNames.File} className="input-icon" />
                </label>
            </div>
            <span className={`error-message ${hasError ? '' : 'hidden'}`}>
                {error}
            </span>
        </div>
    )
}
