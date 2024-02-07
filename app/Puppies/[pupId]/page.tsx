import React from 'react'

import { dancingScript } from '../../fonts/fonts';
import Image from 'next/image';

import PupHeader from "../../component/puppiePageCom/pupHeader";
import Footer from '@/app/component/footer';
import Carousel from '@/app/component/puppiePageCom/carousel';
import pup from '../../../public/pup.jpg';

import female from '../../../public/female.svg';
import male from '../../../public/male.png'


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
          <div className='border border-blue-400 w-2/5 h-2/5'>
            <h1 className={`${dancingScript.className} text-7xl text-fuchsia-500`}>{name}</h1>
            <h2 className='text-xl text-zinc-400 flex justify-start items-center' >{gender === 'Male' ? <Image src={male} alt={name} width={20} height={20}></Image> : <Image src={female} alt='female' width={20} height={20}></Image>}{gender} &#9900; {age}</h2> 
            <h2 className='text-3xl'>${price}</h2>
            <div>
              <h6 className='flex justify-start items-center text-md text-zinc-400 gap-3'>Birthday <h5 className='text-xl text-zinc-900'>{birthday}</h5></h6>
              <h6 className='flex justify-start items-center text-md text-zinc-400 gap-3'>Dad&#39;s Weight <h5 className='text-xl text-zinc-900'>{dad}</h5></h6>
              <h6 className='flex justify-start items-center text-md text-zinc-400 gap-3'>Mom&#39;s Weight <h5 className='text-xl text-zinc-900'>{mom}</h5></h6>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
