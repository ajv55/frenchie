'use client';

import { alex_brush } from '../fonts/fonts';
import Image  from 'next/image'
import { use, useRef } from 'react';

//mock dog data
import { dogData } from '../data/dog';

//framer-motion 
import { useScroll, motion, useTransform } from 'framer-motion';


export default function Pup() {

  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1' ]

  });

  const scaleScroll = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const opacitySroll = useTransform(scrollYProgress, [0 ,1], [0.6, 1] );
  


  return (
    <div ref={ref}  className=" w-full h-max flex flex-col">
        <div className=" w-full h-1/6 p-5 flex justify-center items-center ">
            <h1 className="text-5xl ">Available <span className={`${alex_brush.className} animate-pulse text-8xl text-pink-400`}>Puppies</span></h1>
        </div>
        <div className=' flex flex-wrap justify-center items-center gap-8 w-full h-full overflow-scroll  p-8'>
            {dogData.map((d): any  => {
                 return (
                 <motion.div style={{
                  scale: scaleScroll,
                  opacity: opacitySroll,
                }} className='w-1/4 h-2/6 flex flex-col justify-start items-center p-8 gap-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-fuchsia-400 dark:border-fuchsia-700' key={d.name}>
                    <Image className='cursor-pointer max-w-xs transition duration-300 ease-in-out hover:scale-105 rounded-lg' src={d.imgUrl} alt={d.name} width={300} height={300}  />
                    <h1 className='border border-green-400 w-5/6 h-1/8 text-white flex justify-center items-center text-2xl'>{d.name}</h1>
                    <h2 className='text-white text-2xl'>Birthday: {d.birthday}</h2>
                    <h2 className='text-white text-2xl'>Price: ${d.price}</h2>
                 </motion.div>
                 )
            })}
        </div>
    </div>
  )
}
