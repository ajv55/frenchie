import Link from "next/link";
import { arimo, dancingScript } from '../app/fonts/fonts';

// components 
import InfoPage from "./component/infoPage";
import Pup from './component/pup';
import Form from "./component/form";
import Image from "next/image";

//logo
import Logo from '../public/logo.png'


export default function Home() {
  return (
    <div style={{
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://nypost.com/wp-content/uploads/sites/2/2023/03/NYPICHPDPICT000008292508-1.jpg")'
    }} className={`${arimo.className} bg-opacity-25  bg-no-repeat bg-cover h-screen`}>
      <div   className="h-1/5 flex-wrap flex justify-between items-center text-white p-10">
        <Image className="  " src={Logo} alt='logo' width={180} height={180} />
        <nav className=" w-5/6 flex justify-evenly items-center text-xl">
          <Link href={'/Home'}>Home</Link>
          <Link href={'/Puppies'}>Puppies</Link>
          <Link href={'/Upcoming'}>Upcoming Puppies </Link>
        </nav>
      </div>
      <div className=" w-full h-4/5 flex justify-center items-center flex-col gap-5">
          <h1 className={`${dancingScript.className} text-white text-6xl`}>Frenchies bring joy to the world</h1>
          <h3 className="text-white text-4xl">French bulldogs for sale</h3>
          <p className="border-green-500  w-5/12 text-white text-md p-6 flex justify-end items-center">Adopt Your Dream French Bulldog Today! Browse Our Adorable, Healthy Puppies, And Experience The Joy Of A Lifelong Companion. Don&apos;t Wait, Your Perfect Frenchie Is Just A Click Away!</p>
          <button className="mt-5 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Available Puppies!</button>
      </div>
      <InfoPage />
      <Pup />
      <Form />
    </div>
  )
}
