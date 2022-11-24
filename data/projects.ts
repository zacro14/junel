import { image } from 'images/constants'

export const projects = [
    {
        name: 'Musicphile',
        description:
            'A front end website built for music, it used static songs from shazam api core and can play music.',
        image: image.musicphile,
        githubLink: 'https://github.com/zacro14/zhaks-foody',
        websiteLink: 'https://zhaks-foody.vercel.app/',
        tags: ['Nextjs', 'Typescript', 'Redux toolkit', 'Tailwind css'],
    },
    {
        name: 'Zhacks Foody',
        description:
            'A Food Delivery Front End that uses firestore for backend data. It uses Next.js Framework that base on React Library for building the UI. For styling I used Chakra UI library.',
        image: image.zhakz_foody,
        githubLink: 'https://github.com/zacro14/zhaks-foody',
        websiteLink: 'https://zhaks-foody.vercel.app/',
        tags: ['react', 'next.js', 'chakra ui'],
    },
]
