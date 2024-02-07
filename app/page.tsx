import Link from "next/link";
import { arimo, dancingScript } from '../app/fonts/fonts';

// components 
import InfoPage from "./component/infoPage";
import Pup from './component/pup';
import Form from "./component/form";
import Image from "next/image";
import HowTo from "./component/howTo";
import Footer from "./component/footer";



export default function Home() {
  
  return (
    <div style={{
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://nypost.com/wp-content/uploads/sites/2/2023/03/NYPICHPDPICT000008292508-1.jpg")'
    }} className={`${arimo.className}  bg-no-repeat bg-cover w-full h-screen`}>
      <div className=" w-full h-screen flex justify-center items-center flex-col ">
          <h1 className={`${dancingScript.className} text-white text-8xl p-5`}>Frenchies bring joy to the world</h1>
          <h3 className="text-white text-5xl p-4">Exotic french bulldogs for sale</h3>
          <p className="w-5/12 text-white text-md p-8 flex justify-start items-center">Adopt Your Dream French Bulldog Today! Browse Our Adorable, Healthy Puppies, And Experience The Joy Of A Lifelong Companion. Don&apos;t Wait, Your Perfect Frenchie Is Just A Click Away!</p>
          <Link href='/Puppies' className="relative inline-flex items-center justify-center p-0.5  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"><span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Avaiable Puppies ! 
</span></Link>
      </div>
      <InfoPage />
      <Pup />
      <HowTo />
      <Form />
      <Footer />
    </div>
  )
}
