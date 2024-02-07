
import Link from "next/link";
import { dancingScript } from "../fonts/fonts";
import insta from '../../public/intsaLogo.svg';
import Image from "next/image";


export default function Footer() {

  const date = new Date().getFullYear();

  return (
    <>
      <div className=" h-44 w-full p-4 bg-slate-300 flex flex-col justify-evenly items-center">
        <div className=" flex flex-col justify-center items-start gap-2">
            <Link href='https://www.instagram.com/'><Image src={insta} alt="insta" width={30} height={30}></Image></Link>
        </div>
        <div className="w-2/4 flex justify-evenly items-center">
            <Link className=" hover:underline underline-offset-2" href='/'>Home</Link>
            <Link className=" hover:underline underline-offset-2" href='/Puppies'>Available Puppies</Link>
            <Link className=" hover:underline underline-offset-2" href='/Upcoming'>Upcoming Litter</Link>
        </div>
        <div className=" w-2/5 h-8 flex justify-center items-end ">
          <p className="" >© {date} SWFLFrenchies. All rights reserved.</p>
        </div>
      </div>
      
    </>
  )
}
