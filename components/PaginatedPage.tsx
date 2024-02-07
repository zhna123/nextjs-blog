import Link from "next/link";
import Pagination from "./Pagination"
import Image from 'next/image';
import Date from '../components/date';


type PageProps = {
  posts: any[]
  currentPage: number
  totalPosts: number
  perPage: number
}

const Post = ({coverImage, id, title, date, excerpt}: any) => {
  return (
    <li className='grid grid-cols-5 gap-4 py-8'>
      {/* <Image 
        priority 
        src={coverImage} 
        width={350}
        height={250}
        alt="" 
        className='object-cover rounded-lg'
      /> */}
      <div className='text-blog_green pt-2'>
        <Date dateString={date} />
      </div>
      <div className="flex flex-col gap-2 pt-2">
        <div className="w-2 h-2 rounded-full bg-blog_green"></div>
        <div className="w-px ml-1 bg-slate-300 flex-grow -translate-x-1/2"></div>
      </div>
      <div className='col-span-3 px-2 text-slate-800'>
        <Link href={`/posts/${id}`} className='text-xl font-bol'>{title}</Link>
        <br />
        <p className='pt-4'>{excerpt}</p>
      </div>
    </li>
  )
}

const PaginationPage = ({
  posts,
  currentPage,
  totalPosts,
  perPage,
}: PageProps): JSX.Element => {
  return (
    <div>
      <ul>
        {posts.map((post, i) => (
          <Post key={i} {...post} />
        ))}
      </ul>
      <Pagination
        totalItems={totalPosts}
        currentPage={currentPage}
        itemsPerPage={perPage}
        renderPageLink={(page) => `/allposts/${page}`}
      />
    </div>
  )
}

export default PaginationPage