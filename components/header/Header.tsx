import { header } from 'data/header'
import Link from 'next/link'
import { Bars3BottomLeftIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { image } from 'images/constants'
import { Dispatch, SetStateAction, useState } from 'react'

interface IProps {
    isOpen: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
}

const MobileNav = (props: IProps) => {
    const { setOpen, isOpen } = props
    return (
        <div className="h-screen fixed top-0 left-0 bg-secondary w-full md:hidden lg:hidden">
            <div className="grid grid-cols-2 items-center md:hidden lg:hidden bg-main p-2 rounded-xl mx-10 my-10  shadow-xl">
                <span>
                    <Link href={'/'} passHref>
                        <Image
                            src={image.logo}
                            alt={'Junel Sacro'}
                            className={'h-16 w-16 opacity-70'}
                        />
                    </Link>
                </span>
                <div className="grid justify-end items-center md:hidden lg:hidden">
                    {isOpen ? (
                        <XMarkIcon
                            className="h-10 w-10"
                            onClick={() => setOpen(!isOpen)}
                        />
                    ) : (
                        <Bars3BottomLeftIcon
                            className="h-10 w-10"
                            onClick={() => setOpen(!isOpen)}
                        />
                    )}
                </div>
            </div>

            <div className="p-5">
                <ul className="grid justify-start">
                    {header.map(({ name, link }) => (
                        <Link href={link} passHref key={name}>
                            <li
                                key={name}
                                className={`text-stroke h-full hover:bg-secondary p-5 cursor-pointer rounded-md  
                            `}
                            >
                                <p
                                    className={`h-full capitalize first-letter:text-2xl `}
                                >
                                    {name}
                                </p>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}

const Nav = () => {
    const router = useRouter()
    return (
        <ul className="hidden grid-cols-5 justify-end md:grid lg:grid gap-3">
            {header.map(({ name, link }) => (
                <Link href={link} passHref key={name}>
                    <li
                        key={name}
                        className={`text-stroke text-center h-full hover:bg-secondary p-10 cursor-pointer rounded-md ${
                            router.pathname === link && 'bg-secondary'
                        }`}
                    >
                        <p
                            className={`h-full capitalize first-letter:text-2xl  ${
                                router.pathname === link &&
                                'font-bold text-stroke'
                            }`}
                        >
                            {name}
                        </p>
                    </li>
                </Link>
            ))}
        </ul>
    )
}

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header className="sticky top-10 z-50 shadow-2xl my-10 md:mx-10 p-2 md:p-5 lg:p-5 rounded-xl bg-main mx-10">
            <div className="grid grid-cols-2 items-center md:hidden lg:hidden">
                <span>
                    <Link href={'/'} passHref>
                        <Image
                            src={image.logo}
                            alt={'Junel Sacro'}
                            className={'h-16 w-16 opacity-70'}
                        />
                    </Link>
                </span>
                <div className="grid justify-end items-center md:hidden lg:hidden">
                    <Bars3BottomLeftIcon
                        className="h-10 w-10"
                        onClick={() => setIsOpen(!isOpen)}
                    />
                </div>
            </div>
            <Nav />
            {isOpen && <MobileNav isOpen={isOpen} setOpen={setIsOpen} />}
        </header>
    )
}
