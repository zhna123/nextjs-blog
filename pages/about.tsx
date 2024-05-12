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
          Hi! My name is Na. I'm interested in developing websites and applications.
          <br />
          <br />
          I created this blog as a space to review and reflect on the different tools and technologies I've learned about.
          <br />
          <br />
          In my free time, I enjoy reading, exercising, music, and spending time with my family.
          <br />
          Feel free to drop me a message if you'd like to connect!
          <br />
        </p>
      </section>
    </Layout>
  )
}