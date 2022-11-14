import { Header } from 'components/header'
import React from 'react'
import PageLayout from './pagelayout'

export interface Children {
    children: React.ReactNode
}

const Layout: React.FC<Children> = ({ children }) => {
    return (
        <div className="container mx-auto ">
            <Header />
            <PageLayout>{children}</PageLayout>
        </div>
    )
}

export default Layout
