import React from 'react'
import ContactIcon from 'images/social.svg'
import Image from 'next/image'
import { contact } from 'data/contact'
import Seo from 'components/seo'

const Contact = () => {
    return (
        <div className="container mx-auto">
            <Seo title="Junel Sacro | Contact" description="Contact me" />
            <div className="grid grid-rows-2 md:grid-cols-2 lg:grid-cols-2 items-center justify-center">
                <span className="full p-2 border-secondary border">
                    <Image
                        className="h-full"
                        src={ContactIcon}
                        alt={'contact'}
                    />
                </span>
                <div className="bg-main h-full p-5 text-center flex items-center justify-center flex-col border border-hidden">
                    <h1 className="font-bold text-2xl">Lets Connect</h1>
                    <div className="grid grid-cols-2 grid-rows-2 gap-5 justify-center items-center mt-10">
                        <a href={contact.github} target={'_blank'}>
                            <span className="h-24 w-24 bg-secondary rounded-lg flex items-center justify-center font-bold">
                                Github
                            </span>
                        </a>
                        <a href={contact.linkedin} target={'_blank'}>
                            <span className="h-24 w-24 bg-secondary  rounded-lg flex items-center justify-center font-bold">
                                LinkedIn
                            </span>
                        </a>
                        <a href={contact.facebook} target={'_blank'}>
                            <span className="h-24 w-24 bg-secondary  rounded-lg flex items-center justify-center font-bold">
                                Facebook
                            </span>
                        </a>
                        <a href={`mailto:${contact.email}`} target={'_blank'}>
                            <span className="h-24 w-24 bg-secondary  rounded-lg flex items-center justify-center font-bold ">
                                Email
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
