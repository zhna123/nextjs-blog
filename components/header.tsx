import Link from "next/link";
import { usePathname } from 'next/navigation';
import clsx from 'clsx';


export default function Header() {
  let pathname = usePathname()
  return (
    <header className="bg-blog_green text-blog_bg_green sticky top-0 z-10 flex justify-between items-center h-[100px] p-12 lg:px-24">
      <h1 className="font-bold">Na's Blog</h1>
      <nav>
        <ul className='flex justify-end gap-4'>
          <li>
            <Link href="/">
              <span className={
                clsx(
                  {
                    'font-bold': pathname === '/' || pathname.includes('/posts'),
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
                    'font-bold': pathname === '/about',
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
                      'font-bold': pathname === '/contact',
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