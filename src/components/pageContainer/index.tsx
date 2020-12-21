import React from 'react'
import { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

export default ({ children }: Props) => (
    <div className="page-container">{children}</div>
)
