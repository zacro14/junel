import { header } from 'data/header'
import Link from 'next/link'
import { Bars3BottomLeftIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { image } from 'images/constants'

export const Header = () => {
    const router = useRouter()
    return (
        <header className=" sticky top-10 z-50 shadow-2xl my-10 mx-10 p-2 md:p-5 lg:p-5 rounded-xl bg-main">
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
                    <Bars3BottomLeftIcon className="h-10 w-10" />
                </div>
            </div>
            <ul className="hidden grid-cols-5 justify-end md:grid lg:grid gap-3">
                {header.map(({ name, link }) => (
                    <Link href={link} passHref key={name}>
                        <li
                            key={name}
                            className={`text-stroke text-center hover:bg-secondary p-10 cursor-pointer rounded-md ${
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
        </header>
    )
}
