import PaginationPage from "@/components/PaginatedPage"
import Layout from "@/components/layout"
import Profile from "@/components/profile"
import { PER_PAGE, SITE_TITLE } from "lib/constant"
import { getPaginatedPostsData } from "lib/posts"
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next"
import Head from "next/head"

type PageProps = {
  posts: any[]
  totalPosts: number
  currentPage: number
}

function PaginatedPage({ posts, totalPosts, currentPage }: PageProps) {
  return (
    <Layout>
      <Head>
        <title>{`Page ${currentPage} - ${SITE_TITLE}`}</title>
      </Head>
      {/* <Profile /> */}
      <section>
        <PaginationPage
          posts={posts}
          currentPage={currentPage}
          totalPosts={totalPosts}
          perPage={PER_PAGE}
        />
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  const page = Number(params?.page) || 1
  const { posts, total } = await getPaginatedPostsData({ limit: PER_PAGE, page })

  if (!posts.length) {
    return {
      notFound: true,
    }
  }

  // Redirect the first page to `/` to avoid duplicated content
  if (page === 1) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      posts,
      totalPosts: total,
      currentPage: page,
    },
    revalidate: 60 * 60 * 24, // <--- ISR cache: once a day
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    // Prerender the next 5 pages after the first page, which is handled by the index page.
    // Other pages will be prerendered at runtime.
    paths: Array.from({ length: 5 }).map((_, i) => `/allposts/${i + 2}`),
    // Block the request for non-generated pages and cache them in the background
    fallback: 'blocking',
  }
}

export default PaginatedPage;