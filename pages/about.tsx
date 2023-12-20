import Head from "next/head";
import Layout from "../components/layout";
import { SITE_TITLE } from "../lib/constant";
import Profile from "../components/profile";

export default function About() {
  const title = `${SITE_TITLE}-About`
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <Profile />
      <section>
        <p>
          Hi! I am Na, an independent web developer. Currently, I'm learning and using Next.js to build websites.<br />
          <br />
          When I work with tech stuff, I often find myself searching for related topics, especially when tackling confusing concepts. 
          After a while, I noticed that I keep forgetting and end up searching for the same things repeatedly! So, I thought it would be helpful to 
          organize what I've learned, and that's why I created this blog. <br />
          <br />
          When I am not working on web projects, you can find me reading, exercising, and cherishing moments with my son 
          and family. We're on a journey of growth together every day. <br />


        </p>
      </section>
    </Layout>
  )
}