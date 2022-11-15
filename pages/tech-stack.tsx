import Seo from 'components/seo'
import React from 'react'

const TechStack = () => {
    return (
        <div>
            <Seo title="Tech Stack" />
            <h1 className="font-bold">Technologies</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-5">
                <div className="bg-main h-52 w-full">NextJs</div>
                <div className="bg-secondary h-36  w-full ">Chakra UI</div>
                <div className="bg-main h-36  w-full ">Tailwind</div>
                <div className="bg-main h-36  w-full ">Typescript</div>
            </div>
        </div>
    )
}

export default TechStack
