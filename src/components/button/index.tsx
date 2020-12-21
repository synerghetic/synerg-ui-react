import React from 'react'

export enum Appearance {
    Primary = 'Primary',
}

export type Props = {
    children: string
    appearance?: Appearance
    className?: string
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Button = ({
    children,
    onClick,
    className,
    appearance = Appearance.Primary,
}: Props) => {
    return (
        <button
            className={`button--${appearance.toLowerCase()} `.concat(
                className ?? '',
            )}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

Button.Appearance = Appearance

export default Button
