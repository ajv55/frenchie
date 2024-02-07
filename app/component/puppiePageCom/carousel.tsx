'use client'
import Image from "next/image";
import pup from '../../../public/pup.jpg';

import { Carousel } from 'flowbite-react';


export default function Caroo() {
  return (
      <Carousel>
        <Image src={pup} alt="pup" width={500} height={500}></Image>
        <Image src={pup} alt="pup" width={500} height={500}></Image>
      </Carousel>

  )
}
