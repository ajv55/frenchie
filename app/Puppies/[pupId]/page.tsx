import React from 'react'

import { dancingScript } from '../../fonts/fonts';
import Image from 'next/image';

import PupHeader from "../../component/puppiePageCom/pupHeader";


type searchParamsProps = {
  name: string,
  price: number,
  gender: string,
  birthday: string,
  color: string,
  imgUrl: string
}



export default function PupDetail({params, searchParams}: {params: {pupId: number}, searchParams: searchParamsProps}) {

  const {name, price, gender, birthday, color, imgUrl} = searchParams; 
  console.log(searchParams.name)

  return (
    <>
      <div className='flex flex-col justify-center'>
        <PupHeader name={name}/>
        <div className='border-3 border-red-600 w-full h-screen flex justify-center items-center'>
            <div>
              <Image src={imgUrl} alt={name} width={500} height={500} ></Image>
            </div>
            <h1 className={`${dancingScript.className} text-6xl text-fuchsia-500`}>{name}</h1>
          </div>
      </div>
    </>
  )
}
