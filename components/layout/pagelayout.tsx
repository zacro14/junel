import React from 'react'
import { Children } from '.'

const PageLayout: React.FC<Children> = ({ children }) => {
    return <div className="mx-10">{children}</div>
}

export default PageLayout
