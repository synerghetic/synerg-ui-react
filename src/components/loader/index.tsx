import React from 'react'
import { Colors, colorToHexa } from '../../utils'

type Props = {
    size: number
    color: Colors
    bgColor: Colors
}

const Loader = ({ size, color, bgColor }: Props) => (
    <div
        className="loader"
        style={{
            width: size,
            height: size,
            borderTop: `4px solid ${colorToHexa(color)}`,
            borderRight: `4px solid ${colorToHexa(bgColor)}`,
            borderLeft: `4px solid ${colorToHexa(bgColor)}`,
            borderBottom: `4px solid ${colorToHexa(bgColor)}`,
        }}
    />
)

Loader.Colors = Colors

export default Loader
