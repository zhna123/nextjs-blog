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
      <p>Under Construction...
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis molestie tortor. Nunc mattis hendrerit purus eget tempor. Integer euismod nec turpis eget fermentum. Ut id sodales purus, sit amet aliquam nisl. Integer ultrices purus ut vestibulum semper. Aenean quis orci at risus vestibulum lacinia. Pellentesque eget nulla turpis. Sed eget pellentesque sapien.

Ut ornare nunc et est venenatis dictum nec nec risus. Suspendisse accumsan lacus vel libero sodales aliquam. Morbi pulvinar imperdiet dui nec accumsan. Mauris commodo eros vitae odio fringilla hendrerit. Donec fringilla enim augue. Duis nibh tortor, placerat sed consectetur a, scelerisque eu dolor. Pellentesque id euismod purus, et aliquet diam. Proin sit amet nisl placerat, sodales quam fringilla, commodo dolor. Etiam tellus urna, sodales id felis et, mollis lobortis mauris. Proin tortor ipsum, dictum eu laoreet at, pretium placerat dui. Integer ornare massa et finibus congue.

Aliquam at purus ac justo gravida congue. Nullam scelerisque lacus id ante dignissim, eget rutrum lectus vehicula. Donec a imperdiet diam. In vehicula scelerisque elementum. Suspendisse efficitur mi sed lectus elementum, in condimentum libero accumsan. In vulputate vestibulum tristique. Vivamus a congue enim, vitae aliquam augue. Nullam consequat vel elit vel volutpat. Donec dictum vitae ex vitae egestas. Morbi placerat sit amet massa at bibendum. Ut egestas faucibus est id ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent consequat pulvinar interdum. Vivamus pellentesque velit auctor libero fermentum tincidunt. Suspendisse potenti.
      </p>
    </Layout>
  )
}