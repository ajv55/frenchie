'use client'

import { dogData } from "@/app/data/dog"
import Image from "next/image";
import { delay, motion } from "framer-motion"
import { useRef } from "react";
import Link from "next/link";


type DogDataProp = {
    name: string;
    imgUrl: string;
    birthday: string;
    price: number;
    gender: string;
    color: string;
    id: number;
    data: string,
    age: string,
    dadWeight: string,
    momWeight: string,
}



export default function DogList() {

    const ref = useRef(null);

  return (
    <div className=" w-full h-content  flex flex-wrap justify-center items-center gap-32 mt-28">
        {dogData.map((d, index) => {
            const {name, birthday, gender, price, imgUrl, color, age, momWeight, dadWeight } = d;
            return (
                <motion.div animate={{transition: {delay: 0.02 * index}, y: 0, opacity: 1}} initial={{opacity: 0, scale: 0.3, y: 100}} whileInView={{opacity: 1, scale: 1}}  viewport={{ once: true }}  key={d.name} className="w-2/5 h-96 bg-rose-300 rounded-lg overflow-hidden shadow-2xl  p-5 flex justify-evenly items-center" >
                    <motion.div className=" cursor-pointer" ref={ref} whileTap={{scale: 0.8}} whileHover={{scale: 0.9}}>
                        <Image className="rounded-md w-full h-full" src={d.imgUrl} alt={d.name} width={300} height={300} ></Image>
                    </motion.div>
                    <div className="border-2 border-green-500 flex flex-col justify-center items-center gap-5 w-52 h-60">
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="text-4xl text-purple-400">{d.name}</h1>
                            <h2>{d.birthday}</h2>
                            <h2>${d.price}</h2>
                        </div>
                        <Link href={{
                            pathname: `/Puppies/${d.id}`,
                            query: {
                                name: name,
                                birthday: birthday,
                                gender: gender,
                                price: price,
                                imgUrl: imgUrl,
                                color: color,
                                age: age,
                                mom: momWeight,
                                dad: dadWeight
                            }
                        }}>Learn More</Link>
                    </div>
                </motion.div>
            )
        })}
    </div>
  )
}
