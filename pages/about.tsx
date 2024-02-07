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
          Hi! I'm Na, an independent web developer sharing curated articles on all things web development.
          <br />
          <br />
          While learning or working on projects, I frequently research topics, especially those I find confusing 
          or difficult to remember. Realizing I often forget and repeatedly search for the same information, 
          I decided to organize everything I've learned. That's what inspired me to start this blog. 
          <br />
          <br />
          When I'm not working on web projects, I enjoy reading, exercising, and spending time with my family. 
          We're growing together every day.
          <br />
        </p>
      </section>
    </Layout>
  )
}