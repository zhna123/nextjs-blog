import Image from "next/image";
import { NAME } from "../lib/constant";
import Intro from "./intro";

export default function Profile() {
  return (
    <div className="flex flex-col items-center">
      <Image
        priority
        src="/images/profile.png"
        height={144}
        width={144}
        alt=""
        className='rounded-full'
      />
      <h1 className='text-4xl font-bold text-gray-800 pt-4 font-serif'>{NAME}</h1>
      <Intro />
    </div>
  )
}