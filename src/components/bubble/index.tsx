import React from 'react'
import { Colors } from '../../utils'

export type Props = {
    color: Colors
    position: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed'
    size: 'small' | 'medium' | 'large'
    x: number
    y: number
    animated: boolean
    showOnMobile: boolean
}

export default ({
    position = 'fixed',
    x,
    y,
    size,
    color,
    animated,
    showOnMobile = true,
}: Props) => (
    <div
        className={`bubble--${size} bg-${color.toLowerCase()}-500 ${
            animated ? 'animated' : ''
        } ${showOnMobile ? '' : 'no-mobile'}`}
        style={{ position, left: `${x}px`, top: `${y}px` }}
    />
)
