import Image from 'next/image'
import React from 'react'
import CircleIcon from 'images/circle.svg'
import Seo from 'components/seo'

const Journey = () => {
    return (
        <div className="p-5">
            <Seo title="Junel Sacro | Journey" />
            <div className="mx-4 p-4">
                <div className="grid grid-col gap-4">
                    <div className="flex items-center text-stroke relative">
                        <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-stroke bg-secondary mr-5">
                            <Image
                                src={CircleIcon}
                                alt="circle"
                                className="h-6 w-6"
                            />
                        </div>
                        <div className="grid">
                            <div>September 2022 - Present</div>
                            <li>Learning Typescript</li>
                            <li>
                                Build a Music App using Nextjs, Redux toolkit,
                                TailwindCss
                            </li>
                            <li>
                                Rebuilt my Personal Porfolio using Nextjs ,
                                tailwind, Typescript
                            </li>
                        </div>
                    </div>
                    <div className="flex-auto border-t-2 border-tertiary border-opacity-30"></div>
                    <div className="flex items-center text-stroke relative">
                        <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-stroke border-opacity-30 mr-5">
                            <Image
                                src={CircleIcon}
                                alt="circle"
                                className="h-5 w-5"
                            />
                        </div>
                        <div className="grid">
                            <div>February 2022 - September 2022</div>
                            <li>Hired As a Full Stack Developer</li>
                            <li>Build an Ecommerce Site</li>
                            <li>Help to build the api - build REST Api </li>
                            <li>
                                Work also in the mobile app using expo and react
                                native
                            </li>
                            <li>
                                Build an Educational Website - built with Chakra
                                ui, Redux toolkit, Nextjs and FireStore
                            </li>
                        </div>
                    </div>
                    <div className="flex-auto flex-col border-t-2 border-tertiary  border-opacity-30"></div>
                    <div className="flex items-center text-stroke relative">
                        <div className="rounded-full h-12 w-12 py-3 border-2 border-stroke border-opacity-30 mr-5">
                            <Image
                                src={CircleIcon}
                                alt="circle"
                                className="h-5 w-5"
                            />
                        </div>
                        <div className="grid">
                            <div>August 2021 - February 2022</div>
                            <li>Start Learning React</li>
                            <li>Build an Ecommerce Site - Front End</li>
                            <li>Create Personal Portfolio</li>
                            <li>
                                Create A Site of Food Delivery App - FireStore -
                                NextJS - Chakra Ui
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Journey
