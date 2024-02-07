import Image from "next/image";
import { NAME } from "../lib/constant";
import Intro from "./intro";

export default function Profile() {
  return (
    <div className="flex flex-col items-center mb-12">
      <Image
        priority
        src="/images/profile.png"
        height={144}
        width={144}
        alt=""
        className='rounded-full'
      />
      {/* <h1 className='font-bold text-slate-800 pt-4 font-serif'>{NAME}</h1> */}
      {/* <Intro /> */}
    </div>
  )
}