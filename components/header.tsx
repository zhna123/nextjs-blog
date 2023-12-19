import Link from "next/link";
import { usePathname } from 'next/navigation';
import clsx from 'clsx';


export default function Header() {
  let pathname = usePathname()
  return (
    <header>
      <nav className='h-8 w-full text-slate-800'>
        <ul className='flex justify-center md:justify-end gap-4'>
          <li>
            <Link href="/">
              <span className={
                clsx(
                  {
                    'font-semibold': pathname === '/' || pathname.includes('/posts'),
                  }
                )
              }>Blog</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span className={
                clsx(
                  {
                    'font-semibold': pathname === '/about',
                  }
                )
              }>About</span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span className={
                clsx(
                    {
                      'font-semibold': pathname === '/contact',
                    }
                  )
                }>Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}