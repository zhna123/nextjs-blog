import Head from 'next/head';
import Layout from '../components/layout';
import Link from 'next/link';
import Date from '../components/date';
import Image from 'next/image';


import { getPaginatedPostsData } from '../lib/posts';
import { GetStaticProps } from 'next';
import { PER_PAGE, SITE_TITLE } from '../lib/constant';
import Profile from '../components/profile';
import PaginationPage from '@/components/PaginatedPage';


export const getStaticProps: GetStaticProps = async () => {
  const {posts, total} = await getPaginatedPostsData({limit: PER_PAGE, page: 1});
  return {
    props: {
      posts,
      totalPosts: total,
      currentPage: 1,
    },
  };
}

export default function Home({ 
  posts,
  totalPosts,
  currentPage
 }: {
  posts: {
    date: string;
    excerpt: string; 
    coverImage: string;
    title: string;
    id: string;
  }[],
  totalPosts: number,
  currentPage: number
 }) {
  return (
    <Layout>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>
      <Profile />
      <section>
        <PaginationPage 
          posts={posts}
          currentPage={currentPage}
          totalPosts={totalPosts}
          perPage={PER_PAGE} 
        />
      </section>
    </Layout>
  );
}