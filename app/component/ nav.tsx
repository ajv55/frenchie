//logo
import Image from 'next/image'
import Logo from '../../public/logo.png';
import Link from 'next/link'


export default function  Nav({style}: any) {
  return (
    <>
        <div style={style} className="w-full h-40 flex justify-between items-center text-white p-20 bg-slate-900 absolute bg-transparent">
            <Link href='/'><Image className="" src={Logo} alt='logo' width={150} height={150} /></Link>
            <nav className=" w-3/6 flex justify-between items-center text-xl">
                <Link href={'/'}>Home</Link>
                <Link href={'/Puppies'}>Puppies</Link>
                <Link href={'/Upcoming'}>Upcoming Puppies </Link>
            </nav>
      </div>
    </>
  )
}
