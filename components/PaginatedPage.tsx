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
    <li className='grid grid-cols-3 gap-4 py-6'>
      <Image 
        priority 
        src={coverImage} 
        width={350}
        height={250}
        alt="" 
        className='object-cover rounded-lg'
      />
      <div className='col-span-2 px-2'>
        <Link href={`/posts/${id}`} className='text-xl font-bold'>{title}</Link>
        <br />
        <small className='text-gray-600'>
          <Date dateString={date} />
        </small>
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