/**
 * copyright 2022  Junel Sacro
 */

import Image from 'next/image'
import Programming from 'images/programming.svg'
import { CheckBadgeIcon } from '@heroicons/react/24/outline'
import Seo from 'components/seo'

export default function Home() {
    return (
        <div className="container mx-auto">
            <Seo />
            <div className="grid grid-row-2 md:grid-cols-2 items-center justify-center h-64">
                <div className="bg-main h-full p-5 text-center flex items-start justify-center flex-col border border-hidden">
                    <h1 className="font-bold text-2xl">
                        Hello 👋, I'm Junel Sacro
                    </h1>
                    <div className="flex flex-col items-start pt-5">
                        <div className="flex items-center ">
                            <CheckBadgeIcon className="h-5 w-5 mr-2 text-tertiary" />
                            <span>Web Developer</span>
                        </div>
                        <div className="flex items-center">
                            <CheckBadgeIcon className="h-5 w-5 mr-2 text-tertiary" />
                            <span>Anime Lover</span>
                        </div>
                        <div className="flex items-center">
                            <CheckBadgeIcon className="h-5 w-5 mr-2 text-tertiary" />
                            <span>Learner</span>
                        </div>
                    </div>
                </div>
                <span className="full p-2 border-secondary border">
                    <Image className="h-full" src={Programming} alt={'Me'} />
                </span>
            </div>
        </div>
    )
}
