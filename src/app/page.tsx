import Image from "next/image";
import Link from 'next/link';
import promo from './images/vlad.png'

export default function Home() {
  return <>
    <div>
      <Image
        src={promo}
        alt="promo" />В Бургер Кинг 👀
    </div>
    <div className='mt-[10px]'>
      <Link href="/rules">
        <button className='bg-[#f5ebdc] text-textColor w-[150px] h-[64px] ml-10 rounded-[8px]'>
          Правила
        </button>
      </Link>
      <button className='bg-[#f5ebdc] text-textColor w-[150px] h-[64px] ml-[10px] rounded-[8px]'>
        Написать
      </button>
      <Link href="/activate">
        <button className='bg-[#FFCC1B] text-[#502314] font-normal font-[Flame] text-[20px] leading-[20px] w-[310px] h-[64px] ml-10 mt-[10px] rounded-[8px]'>
          Активировать челобрика 📸
        </button>
      </Link>
      <Link href='/awards'>
        <button className='bg-[#f5ebdc] text-textColor w-[150px] h-[64px] ml-10 rounded-[8px] mt-[10px]'>
          Призы
        </button>
      </Link>
      <Link href="">
        <button className='bg-[#f5ebdc] text-textColor w-[150px] h-[64px] ml-[10px] rounded-[8px]'>
          В Бургер Кинг
        </button>
      </Link>
      <Link href="/games">
        <button className='bg-[#f5ebdc] text-textColor w-[150px] h-[64px] ml-10 rounded-[8px] mt-[10px]'>
          Игры
        </button>
      </Link>
      <button className='bg-[#f5ebdc] text-textColor w-[150px] h-[64px] ml-[10px] rounded-[8px]'>
        Ачивки
      </button>
    </div>
  </>
}
