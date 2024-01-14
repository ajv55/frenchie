import Scale from '../assets/scale.svg';
import Image from 'next/image';
import height from '../assets/height.svg';
import heart from '../assets/heart.svg';

// font 
import { merriweather } from '../fonts/fonts';

export default function InfoPage() {
  return (
    <div className=" bg-gray-200 w-full h-5/6 flex justify-evenly ">
      <div className=" w-1/4 h-full flex flex-col justify-center gap-20">
        <div className='flex justify-evenly items-center'>
          <Image src={Scale} alt='scale' width={50} height={50} />
          <div className='flex-col justify-start items-center'>
            <h2 className='text-2xl p-3 w-2/3'>Weight</h2>
            <h2>16 - 18 pounds</h2>
          </div>
      </div>
      <div className='flex justify-evenly items-center '>
          <Image src={height} alt='scale' width={50} height={50} />
          <div className='flex-col justify-start items-start'>
            <h2 className='text-2xl p-3 w-2/3'>Height</h2>
            <h2>10 - 12 inches</h2>
          </div>
      </div>
      <div className=' flex justify-evenly items-center'>
          <Image src={heart} alt='scale' width={50} height={50} />
          <div className=' flex flex-col justify-center items-start gap-2'>
            <h2 className='text-2xl w-2/3'>Lifespan</h2>
            <h2>10 - 12 years</h2>
          </div>
      </div>
      </div>
      <div className="pt-24 w-4/6 h-full flex justify-start items-center flex-col gap-24">
        <h2 className={`${merriweather.className} text-4xl`}>Breeding Info</h2>
        <p className={`${merriweather.className} tracking-tight text-black-500 md:text-xl dark:text-grey-400  w-5/6`}>The French Bulldog is a small, charming breed with a distinctive appearance, known for its affectionate and playful nature. They have a compact body, short coat, and a unique wrinkled face. They are friendly, good with families and other pets, and require minimal grooming.</p>
        <p className={`${merriweather.className} tracking-tight text-black-500 md:text-xl dark:text-grey-400 w-5/6`}>However, they are prone to certain health issues due to their flat faces, so regular veterinary care is essential. French Bulldogs are a popular choice for dog lovers, with an average lifespan of 10 to 12 years.</p>
      </div>
    </div>
  )
}
