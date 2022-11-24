import React from 'react'
import Seo from 'components/seo'
import { StopIcon } from '@heroicons/react/24/outline'
import { StopIcon as StopIconSolid } from '@heroicons/react/24/solid'

const Journey = () => {
    return (
        <div className="md:p-5">
            <Seo title="Junel Sacro | Journey" />
            <div className=" md:mx-4 md:p-4 h-full">
                <div className="flex items-stretch flex-col relative justify-start">
                    <span className=" w-[1px] h-[100px] bg-gradient-to-b from-slate-50 to-stroke items-center self-center"></span>
                </div>
                <div className="flex w-full h-52">
                    <div className="flex-1 flex items-start justify-end bg-main">
                        <h1 className="font-semibold pr-5">
                            September 2022 - Present
                        </h1>
                    </div>
                    <div className="flex flex-col">
                        <span>
                            <StopIconSolid className="h-5 w-5 text-tertiary" />
                        </span>
                        <span className="flex-1 self-center w-[1px] border-r border-dashed border-stroke"></span>
                    </div>
                    <div className="flex-1">
                        <div className="rounded p-5 h-40 w-full bg-secondary">
                            <h2>Start</h2>
                        </div>
                    </div>
                </div>
                <div className="flex w-full h-52 ">
                    <div className="flex-1 flex items-start justify-end ">
                        <h1 className="font-semibold pr-5">
                            February 2022 - September 2022
                        </h1>
                    </div>
                    <div className="flex flex-col">
                        <span>
                            <StopIcon className="h-5 w-5 text-secondary" />
                        </span>
                        <span className="flex-1 self-center w-[1px] border-r border-dashed border-stroke"></span>
                    </div>
                    <div className="flex-1">Hello</div>
                </div>
                <div className="flex w-full h-52 ">
                    <div className="flex-1 flex items-start justify-end">
                        <h1 className="font-semibold pr-5">
                            August 2021 - February 2022
                        </h1>
                    </div>
                    <div className="flex flex-col">
                        <span>
                            <StopIcon className="h-5 w-5 text-secondary" />
                        </span>
                        <span className="flex-1 self-center w-[1px] border-r border-dashed border-stroke"></span>
                    </div>
                    <div className="flex-1">Hello</div>
                </div>
                {/* <div className="grid grid-col gap-4">
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
                </div> */}
            </div>
        </div>
    )
}

export default Journey
