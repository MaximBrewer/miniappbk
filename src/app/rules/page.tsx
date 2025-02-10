import Image from 'next/image';
import Link from 'next/link';
import rulesImg from '../images/rules.jpg';
import logo from '../images/logo.svg';
import back from '../images/back.png';
import title from '../images/title.png'

export default function Rules(){
    return (
        <div>
            <header className=' bg-mainColor h-[80px]'>
                <div className='flex items-center'>
            <Link href="/">
            <Image
                src={back}
                alt="btnback"
                className='ml-[40px] mt-[20px]'/>
                </Link>
            <Image
                src={logo}
                alt="imglogo"
                className='ml-[20px] mt-[19px]'/>
            <Image 
                src={title}
                alt="title"
                className='ml-[26px] mt-6'/>
            {/* <p className='font-[700] text-[24px] leading-[24px] mt-7 ml-[75px]'> Челобрики </p> */}
            </div>
            </header>
            <div> 
                <Image
                src={rulesImg}
                alt='rules'
                />
            </div>
        </div>
    )
}

