import Head from 'next/head';
import Layout from '../components/layout';
import Link from 'next/link';
import Date from '../components/date';
import Image from 'next/image';


import { getSortedPostsData } from '../lib/posts';
import { GetStaticProps } from 'next';
import { SITE_TITLE } from '../lib/constant';
import Profile from '../components/profile';

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ 
  allPostsData,
 }: {
  allPostsData: {
    date: string;
    excerpt: string; 
    coverImage: string;
    title: string;
    id: string;
  }[]
 }) {
  return (
    <Layout>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>
      <Profile />
      <section>
        {/* <h2 className='text-2xl font-semibold text-gray-800 pb-4'>Blog</h2> */}
        <ul >
          {allPostsData.map(({ id, date, excerpt, coverImage, title }) => (
          <li key={id} className='grid grid-cols-3 gap-4 py-6'>
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
          ))}
        </ul>
      </section>
    </Layout>
  );
}