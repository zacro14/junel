import { IChildren } from '@interface/children.interface'
import { Header } from 'components/header'
import React from 'react'
import PageLayout from './pagelayout'

const Layout: React.FC<IChildren> = ({ children }) => {
    return (
        <div className="container mx-auto ">
            <Header />
            <PageLayout>{children}</PageLayout>
        </div>
    )
}

export default Layout
