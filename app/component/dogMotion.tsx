import Image from "next/image";

import { useScroll, motion, useTransform } from 'framer-motion';
import { useRef } from "react";
import Link from "next/link";

type DogProp = {
    name: string, 
    birthday: string,
    price: number,
    imgUrl: string
}

export default function DogMotion({name, birthday, price, imgUrl}: DogProp) {

    const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1']

  });

  const scaleScroll = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacitySroll = useTransform(scrollYProgress, [0 ,1], [0.7, 1] );

  return (
    <motion.div ref={ref} style={{
        scale: scaleScroll,
        opacity: opacitySroll,
      }}   className='relative w-1/3 h-2/6 flex flex-col justify-start items-center p-8 gap-6 bg-slate-300 border border-gray-200 rounded-lg shadow dark:bg-fuchsia-400 dark:border-fuchsia-700 '>
          <Link href='/Puppies'><Image className='cursor-pointer max-w-xs transition duration-300 ease-in-out hover:scale-105 rounded-lg' src={imgUrl} alt={name} width={350} height={350} /></Link>
          <h1 className=' w-5/6 h-1/8 text-white flex justify-center items-center text-2xl'>{name}</h1>
          <h2 className='text-white text-2xl'>Birthday: {birthday}</h2>
          <h2 className='text-white text-2xl'>Price: ${price}</h2>
       </motion.div>
  )
}
