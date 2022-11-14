import { header } from 'data/header'
import Link from 'next/link'
import { Bars3BottomLeftIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'

export const Header = () => {
    const router = useRouter()

    console.log(router)
    return (
        <header className="shadow-2xl my-10 mx-10 p-5 rounded-xl">
            <div className="grid justify-end items-center md:hidden lg:hidden">
                <Bars3BottomLeftIcon className="h-10 w-10" />
            </div>
            <ul className="hidden grid-cols-5 justify-end md:grid lg:grid gap-3">
                {header.map(({ name, link }) => (
                    <Link href={link} passHref key={name}>
                        <li
                            key={name}
                            className={`text-stroke text-center hover:bg-secondary p-10 cursor-pointer rounded-md ${
                                router.pathname === link && 'bg-secondary  shadow-md'
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
