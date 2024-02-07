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
        <p className="text-slate-800">
          Hi! I am Na, an independent web developer. I share concise articles about what I'm learning in development.
          <br />
          <br />
          When I learn new things or work on my projects, I often look up related topics, especially if I find something confusing or hard to memorize. 
          I realized that I keep forgetting things and have to search for them again and again. So, I decided to organize everything I've learned, and 
          that's how I started this blog. <br />
          <br />
          When I am not working on web projects, you can find me reading, exercising, and cherishing moments with my son 
          and family. We're on a journey of growth together every day. <br />


        </p>
      </section>
    </Layout>
  )
}