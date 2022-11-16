/**
 * copyright 2022  Junel Sacro
 */

import Image from 'next/image'
import Programming from 'images/programming.svg'
import { CheckBadgeIcon } from '@heroicons/react/24/outline'
import Seo from 'components/seo'
import Link from 'next/link'

export default function Home() {
    return (
        <div className="container mx-auto">
            <Seo title="Junel Sacro | About" />
            <div className="grid grid-row-2 md:grid-cols-2 items-center justify-center">
                <div className="bg-secondary h-full p-5 text-center flex items-start justify-center flex-col border border-hidden">
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
                    <button className="bg-tertiary p-3 text-main rounded-lg mt-10">
                        <Link href={'/contact'}>Contact Me</Link>
                    </button>
                </div>
                <span className="full p-2">
                    <Image className="h-full" src={Programming} alt={'Me'} />
                </span>
            </div>
        </div>
    )
}
