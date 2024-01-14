import Image from "next/image";
import Dior from '../../public/dior.png';
import Arrow from '../../public/arrow.png';
import { alex_brush } from '../fonts/fonts';



export default function Form() {
  return (
    <div className="border-2 bg-slate-900 border-pink-800 w-full h-5/6 flex flex-col gap-7 justify-center items-end relative ">
        <Image className=" absolute top-0 left-0 " src={Dior} alt='dior' width={440} height={440} />
        <div className=" w-5/6 h-full flex flex-col justify-center pt-4 pl-96 items-center gap-5 relative">
        <Image className=" top-96 left-44 absolute" src={Arrow} alt='arrow' width={80} height={80} />
        <h1 className={`${alex_brush.className} absolute text-white text-9xl top-3/4 left-56`}>Dior</h1>
            <h2 className={`${alex_brush.className} text-7xl text-fuchsia-400`}>Let&apos;s Talk!</h2>
            <form  className="w-5/6 h-4/6 flex flex-col justify-center items-center border border-blue-300 p-10 rounded-xl bg-slate-200">
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="floating-firstname" id="floating-firstname" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-400 focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " required />
                    <label htmlFor="floating-firstname" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-purple-600 peer-focus:dark:text-purple-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Firstname</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="floating-lastname" id="floating-lastname" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-400 focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " required />
                    <label htmlFor="floating-lastname" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-purple-600 peer-focus:dark:text-purple-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Lastname</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-400 focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder="" required />
                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-purple-600 peer-focus:dark:text-purple-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <textarea  name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-400 focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " required />
                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-purple-600 peer-focus:dark:text-purple-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
                </div>
            </form>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Send Message!
                </span>
            </button>
        </div>
    </div>
  )
}
