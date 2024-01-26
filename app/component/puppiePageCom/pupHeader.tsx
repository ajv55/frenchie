
type PupHeaderProps = {
 name: string
}

export default function PupHeader({name}: PupHeaderProps) {
  return (
    <div className="border-3 border-orange-500 w-full h-screen flex justify-center items-center bg-fuchsia-400">
        <h1 className="text-7xl text-blue-500">Meet {name}</h1>
    </div>
  )
}
