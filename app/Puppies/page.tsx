import { dancingScript } from "../fonts/fonts";

import DogList from "../component/puppiePageCom/dogList";


export default function Page() {



  return (
    <>
      <div style={{
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://img1.wsimg.com/isteam/ip/a6b0b43f-f385-4405-82bc-646f3a983b54/Puppies%E2%AD%90.jpg")'
    }} className=" bg-cover bg-no-repeat w-full h-screen flex flex-col justify-center items-center gap-32">
        <h1 className={`${dancingScript.className} text-8xl text-fuchsia-400`}>Our Available Puppies!</h1>
        <p className="text-3xl text-fuchsia-300">Your dream frenchie awaits you!</p>
      </div>
      <DogList />
    </>
  )
}
