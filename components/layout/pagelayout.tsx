import { IChildren } from '@interface/children.interface'
import React from 'react'

const PageLayout: React.FC<IChildren> = ({ children }) => {
    return <div className="mx-10">{children}</div>
}

export default PageLayout
