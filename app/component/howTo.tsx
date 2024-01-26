import Link from 'next/link';
import { alex_brush, arimo } from '../fonts/fonts';

export default function HowTo() {
  return (
    <div style={{
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2020/09/30171012/French-Bulldog-puppies-being-held-in-the-arms-of-a-woman.jpeg")'
    }} className=' w-full h-screen  bg-no-repeat bg-cover flex flex-col justify-center gap-5'>
      <div className=' w-full h-2/6 flex justify-center items-end'>
        <h1 className={`${alex_brush.className} text-red-300 text-8xl`} >How to get your frenchie!</h1>
      </div>
      <div className=' w-full h-full flex justify-evenly items-start'>
        <div className=' w-1/4 h-4/5 flex flex-col justify-center items-start p-16'>
          <h2 className='text-3xl flex gap-4 items-center text-red-300 '><span className={`${alex_brush.className} text-6xl`}>First</span> Step:</h2>
          <p className={`${arimo.className} text-lg  w-80  p-3 text-white`}><Link className='underline' href={'/Puppies'}>Search for your new puppy here</Link>, then apply to bring your new adorable frenchie home with you.</p>
        </div>
        <div className=' w-1/4 h-4/5 flex flex-col justify-center items-start p-16'>
          <h2 className='text-3xl flex gap-4 items-center text-red-300'><span className={`${alex_brush.className} text-6xl`}>Second</span>  Step:</h2>
          <p className={`${arimo.className} text-lg   w-80  p-3 text-white` }>We&apos;ll review your application and answer any questions you may have.</p>
        </div>
        <div className=' w-1/4 h-4/5 flex flex-col justify-center items-start p-16'>
          <h2 className='text-3xl flex gap-4 items-center text-red-300'><span className={`${alex_brush.className} text-6xl`}>Third</span>  Step:</h2>
          <p className={`${arimo.className} text-lg  w-80  p-3 text-white`}>Say hello to your new puppy! Pick up in the greater Southern Florida area, or have us hand-deliver your puppy nation-wide.</p>
        </div>
      </div>
    </div>
  )
}
