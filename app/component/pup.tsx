'use client';

import { alex_brush } from '../fonts/fonts';
import DogMotion from './dogMotion';
import { use, useRef } from 'react';

//mock dog data
import { dogData } from '../data/dog';

//framer-motion 
import { useScroll, motion, useTransform } from 'framer-motion';


export default function Pup() {

  const newDogData = [...dogData];
  const dog = newDogData.filter((ndd, i) => i < 4 )
  console.log(dog)

  

  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1']

  });

  const scaleScroll = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacitySroll = useTransform(scrollYProgress, [0 ,1], [0.7, 1] );
  


  return (
    <div   className=" w-full h-max flex flex-col">
        <div className=" w-full h-1/6 p-5 flex justify-center items-center ">
            <h1 className="text-5xl ">Available <span className={`${alex_brush.className} animate-pulse text-8xl text-pink-400`}>Puppies</span></h1>
        </div>
        <div className=' flex flex-wrap justify-center items-center gap-8 w-full h-full overflow-scroll  p-8'>
            {dog.map((d): any  => {
                 return (
                    <DogMotion name={d.name} price={d.price} birthday={d.birthday} imgUrl={d.imgUrl} key={d.name}  />
                 )
            })}
        </div>
    </div>
  )
}
