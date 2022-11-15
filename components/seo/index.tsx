import Head from 'next/head'
import React from 'react'

interface Metadata {
    title?: string
    description?: string
}
const Seo: React.FC<Metadata> = ({
    title = 'Junel Sacro',
    description = 'Junel Portfolio',
}) => {
    return (
        <Head>
            <title>{title} 🤔</title>
            <meta name="description" content={description} />
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
        </Head>
    )
}

export default Seo
