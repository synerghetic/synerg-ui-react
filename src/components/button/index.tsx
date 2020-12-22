import React from 'react'
import { Colors } from '../../utils'
import Loader from '../loader'

export enum Appearance {
    Primary = 'Primary',
}

export type Props = {
    children: string
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    appearance?: Appearance
    className?: string
    disabled?: boolean
    loading?: boolean
}

const Button = ({
    children,
    onClick,
    className,
    appearance = Appearance.Primary,
    disabled = false,
    loading = false,
}: Props) => {
    return (
        <button
            className={`button--${appearance.toLowerCase()} ${
                disabled ? 'disabled' : ''
            } `.concat(className ?? '')}
            onClick={e => {
                if (!disabled) onClick(e)
            }}
        >
            <div className={`loader-container ${loading ? '' : 'hidden'}`}>
                <Loader
                    size={12}
                    color={Colors.White}
                    bgColor={Colors.Purple}
                />
            </div>

            <span className={loading ? 'hidden' : ''}>{children}</span>
        </button>
    )
}

Button.Appearance = Appearance

export default Button
