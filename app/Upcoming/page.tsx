import {dancingScript } from '../fonts/fonts';

export default function Page() {
  return (
    <div style={{
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://poeticfrenchbulldogs.com/wp-content/uploads/2020/01/PFB-hero.jpg")'
    }} className=" bg-cover bg-no-repeat">
     <h1 className={`${dancingScript.className} text-8xl text-fuchsia-400 w-full h-screen flex justify-center items-center`}>Our Avaiable Puppies!</h1>
    </div>
  )
}
