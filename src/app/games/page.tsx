'use client'

import Image from 'next/image';
import Link from 'next/link';
import gamesImg from '../images/games.png';
import logo from '../images/logo.svg';
import back from '../images/back.png';
import title from '../images/title.png';
import { usePathname } from 'next/navigation';

export default function Games() {


    const pathname = usePathname()
    console.log(pathname === '/')

    return (
        <div>
            <header className=' bg-mainColor h-[80px]'>
                <div className='flex items-center'>
                    <Link href="/">
                        <Image
                            src={back}
                            alt="btnback"
                            className='ml-[40px] mt-[20px]' />
                    </Link>
                    <Image
                        src={logo}
                        alt="imglogo"
                        className='ml-[20px] mt-[19px]' />
                    <Image
                        src={title}
                        alt="title"
                        className='ml-[26px] mt-6' />
                    {/* <p className='font-[700] text-[24px] leading-[24px] mt-7 ml-[75px]'> Челобрики </p> */}
                </div>
            </header>
            <div className='bg-white ml-10 mt-5 text-[20px] leading-[20px] text-[#000000] mix-blend-normal'>
                Игры
            </div>
            <Link href="">
                <button className='bg-[#FFCC1B] w-[310px] h-[64px] ml-10 mt-[20px] rounded-[8px]'>
                    <span className='font-flame font-normal text-[24px] leading-[24px] text-center text-textColor mix-blend-normal'>Найди пару</span>
                </button>
            </Link>
            <Link href="">
                <button className='bg-[#FFCC1B] w-[310px] h-[64px] ml-10 mt-[10px] rounded-[8px]'>
                    <span className='font-flame font-normal text-[24px] leading-[24px] text-center text-textColor mix-blend-normal'>Лопай бургеры</span>
                </button>
            </Link>
            <div>
                <Image
                    src={gamesImg}
                    alt='rules'
                    className='mt-[10px]'
                />
            </div>
        </div>
    )
}