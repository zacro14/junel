import Image from 'next/image'
import React, { useState } from 'react'
interface IProjects {
    name: string
    description: string
    image: any
    tags: string[]
}

export const ProjectItem: React.FC<IProjects> = ({
    name,
    description,
    image,
    tags,
}) => {
    const [showmore, setShowMore] = useState(false)
    return (
        <div className=" min-h-[300px] w-full bg-secondary rounded-3xl p-5 flex flex-col gap-5">
            <div className="select-none">
                <Image
                    src={image}
                    alt={name}
                    placeholder={'blur'}
                    blurDataURL={image.src}
                    className={'rounded-xl object-cover bg-main shadow-xl'}
                />
            </div>
            <div>
                <div className="capitalize text-lg font-bold mb-2">{name}</div>
                <div className="text-opacity-75 text-stroke text-sm">
                    {description}
                </div>
            </div>
            <div className="flex flex-wrap gap-2">
                {showmore &&
                    tags.map((tags) => (
                        <span className=" rounded-lg bg-stroke text-main py-2 px-5 bg-opacity-60 mr-2">
                            {tags}
                        </span>
                    ))}
                <span
                    className="w-full flex justify-end cursor-pointer hover:underline"
                    onClick={() => setShowMore(!showmore)}
                >{`${showmore ? 'Show less' : 'Show more'}`}</span>
            </div>
        </div>
    )
}
