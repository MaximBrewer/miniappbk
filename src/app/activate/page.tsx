import Image from 'next/image';
import Link from 'next/link';
import activateImg from '../images/activate.png';
import logo from '../images/logo.svg';
import back from '../images/back.png';
import title from '../images/title.png'

export default function Activate(){
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
                src={activateImg}
                alt='activate'
                />
            </div>
            <button className='bg-[#D62300] w-[310px] h-[64px] ml-10 mt-[10px] rounded-[8px]'>
                <span className='text-[#ffffff] font-normal text-[24px] leading-[20px] '>Загрузить фото</span>
            </button>
        </div>
    )
}