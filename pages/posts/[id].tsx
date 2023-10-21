import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    // If fallback is false, then any paths not returned by 
    // getStaticPaths will result in a 404 page.
    fallback: false,
  };
}

export default function Post({ 
  postData 
}: {
  postData: {
    title: string;
    date: string;
    contentHtml: string
  }
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className='py-6 text-gray-600'>
        <Link href="/">← Back to articles</Link>
      </div>
      <article className='pt-12'>
        <h1 className='text-4xl font-bold text-gray-800'>{postData.title}</h1>
        <div className='text-gray-600 pt-2'>
          <Date dateString={postData.date} />
        </div>
        <div className='pt-8 prose lg:prose-xl' dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}