import { dancingScript } from "../fonts/fonts";


export default function Page() {
  return (
    <div style={{
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://img1.wsimg.com/isteam/ip/a6b0b43f-f385-4405-82bc-646f3a983b54/Puppies%E2%AD%90.jpg")'
    }} className=" bg-cover bg-no-repeat">
     <h1 className={`${dancingScript.className} text-8xl text-fuchsia-400 w-full h-screen flex justify-center items-center`}>Our Avaiable Puppies!</h1>
    </div>
  )
}
