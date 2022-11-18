import Seo from 'components/seo'
import React from 'react'

const TechStack = () => {
    return (
        <section>
            <Seo title="TJunel Sacro | Tech-Stack" />
            <div className="grid gap-10">
                <h1 className="font-bold">Technologies</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    <div className="bg-main h-52 w-full rounded-md flex items-center justify-center">
                        <h2 className="font-bold">Nextjs</h2>
                    </div>

                    <div className="bg-secondary h-52 w-full rounded-md flex items-center justify-center">
                        <h2 className="font-bold">Chakra Ui</h2>
                    </div>

                    <div className="bg-main h-52 w-full rounded-md flex items-center justify-center">
                        <h2 className="font-bold">Tailwind css</h2>
                    </div>
                    <div className="bg-secondary h-52 w-full rounded-md flex items-center justify-center">
                        <h2 className="font-bold">Typescript</h2>
                    </div>
                    <div className="bg-main h-52 w-full rounded-md flex items-center justify-center">
                        <h2 className="font-bold">Javascript</h2>
                    </div>
                    <div className="bg-secondary h-52 w-full rounded-md flex items-center justify-center">
                        <h2 className="font-bold">Expressjs</h2>
                    </div>
                    <div className="bg-main h-52 w-full rounded-md flex items-center justify-center">
                        <h2 className="font-bold">Moongose</h2>
                    </div>
                    <div className="bg-secondary h-52 w-full rounded-md flex items-center justify-center">
                        <h2 className="font-bold">Mongodb</h2>
                    </div>
                </div>
                <div>
                    <h1 className="font-bold">Development tools</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-5 ">
                        <div className="bg-main h-52 w-full rounded-md flex items-center justify-center">
                            <h2 className="font-bold">Git</h2>
                        </div>

                        <div className="bg-main h-52 w-full rounded-md flex items-center justify-center">
                            <h2 className="font-bold">Vscode</h2>
                        </div>

                        <div className="bg-main h-52 w-full rounded-md flex items-center justify-center">
                            <h2 className="font-bold">Postman</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TechStack
