import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize'
import { CustomMDX } from '@/components/mdx';


interface Props {
  mdxSource: MDXRemoteSerializeResult;
  title: string;
  date: string;
}

export const getStaticProps: GetStaticProps<{
  mdxSource: MDXRemoteSerializeResult
}> = async ({ params }) => {
  const postData = await getPostData(params.id);
  const mdxSource = await serialize(postData.content)
  return { props: { mdxSource, 'title': postData.title, 'date': postData.date } }
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

export default function Post({ mdxSource, title, date }: Props) {
  return (
    <Layout>
      <Head>
        <title>{ title }</title>
      </Head>
      <div className='py-6 text-blog_green'>
        <Link href="/">← Back to articles</Link>
      </div>
      <article className='pt-12'>
        <h1 className='font-bold text-slate-800'>{ title }</h1>
        <div className='text-slate-600 pt-2'>
          <Date dateString={date} />
        </div>
        <div className='pt-8 leading-loose prose prose-slate'>
          <CustomMDX mdxSource={mdxSource} />
        </div>
      </article>
      <div className='py-20 text-blog_green'>
        <Link href="/">← Back to articles</Link>
      </div>
    </Layout>
  );
}