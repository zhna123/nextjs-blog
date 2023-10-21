import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className='h-8 w-full text-lg text-gray-800'>
        <ul className='flex justify-center md:justify-end gap-4'>
          <li><Link href="/">Blog</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}