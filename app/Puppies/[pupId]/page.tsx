import React from 'react'

import { alex_brush, dancingScript } from '../../fonts/fonts';
import Image from 'next/image';

import PupHeader from "../../component/puppiePageCom/pupHeader";
import Footer from '@/app/component/footer';
import Carousel from '@/app/component/puppiePageCom/carousel';
import pup from '../../../public/pup.jpg';

import female from '../../../public/female.svg';
import male from '../../../public/male.png'

import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { GiWeightScale } from "react-icons/gi";
import { IoIosColorPalette } from "react-icons/io";


type searchParamsProps = {
  name: string,
  price: number,
  gender: string,
  birthday: string,
  color: string,
  imgUrl: string
  age: string,
  dad: string,
  mom: string
}



export default function PupDetail({params, searchParams}: {params: {pupId: number}, searchParams: searchParamsProps}) {

  const {name, price, gender, birthday, color, imgUrl, age, mom, dad} = searchParams; 
  console.log(searchParams.dad)

  return (
    <>
      <div className='flex flex-col justify-center gap-10'>
        <PupHeader name={name}/>
        <div className='border-2 border-red-600 w-full h-screen flex justify-evenly items-center gap-2'>
          <div className='w-2/4 h-3/4'>
            <Carousel />
          </div>
          <div className=' w-2/5 h-4/5 flex flex-col justify-center items-center gap-5'>
            <h1 className={`${alex_brush.className} text-7xl text-fuchsia-500`}>{name}</h1>
            <h2 className='text-xl text-zinc-400 flex justify-start items-center' >{gender === 'Male' ? <Image src={male} alt={name} width={20} height={20}></Image> : <Image src={female} alt='female' width={20} height={20}></Image>}{gender} &#9900; {age}</h2> 
            <h2 className='text-3xl bg-slate-200 w-2/5 rounded-2xl flex justify-center items-center'>${price}</h2>
            <div className=' w-full h-3/5 flex flex-wrap justify-evenly items-center gap-6'>
              <div className='flex justify-start items-center  w-48 h-20 gap-2'>
                 <LiaBirthdayCakeSolid size={50}/>
                 <div>
                 <h6 className='text-md text-zinc-400 gap-2'>Birthday</h6>
                 <h5 className='text-xl text-zinc-900'>{birthday}</h5>
                 </div>
              </div>
              <div className='flex justify-start items-center w-52 h-20  gap-2'>
                 <GiWeightScale size={50}/>
                 <div>
                 <h6 className='text-md text-zinc-400 gap-2'>Dad&#39;s Weight</h6>
                 <h5 className='text-xl text-zinc-900'>{dad}</h5>
                 </div>
              </div>
              <div className='flex justify-start items-center  w-52 h-20  gap-2'>
                 <GiWeightScale size={50}/>
                 <div>
                  <h6 className='text-md text-zinc-400 gap-2'>Mom&#39;s Weight </h6>
                  <h5 className='text-xl text-zinc-900'>{mom}</h5>
                 </div>
              </div>
              <div className='flex justify-start items-center  w-52 h-20  gap-2'>
                 <IoIosColorPalette size={50}/>
                 <div>
                  <h6 className='text-md text-zinc-400 gap-2'>Color</h6>
                  <h5 className='text-xl text-zinc-900'>{color}</h5>
                 </div>
              </div>
              
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
