import Head from "next/head";
import { getAllPostIds, getPostData } from "../../../lib/posts";
import { NavBar, PostHead } from "../../../components/molecules";
import PostContent from "../../../components/postContent";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <>
      <Head>
        <title>{postData.title} | Blog | Seban.dev</title>
        <script type="application/ld+json" key={postData.id} />
        <meta name="description" content={postData.description} />
        <meta itemprop="name" content={`${postData.title} | seban.dev`} />
        <meta itemprop="description" content={postData.description} />
      </Head>
      <NavBar
        links={[
          {
            path: "/",
            text: "Home",
            isActive: false,
          },
          {
            path: "/blog",
            text: "Blog",
            isActive: true,
          },
        ]}
      />
      <article>
        <PostHead data={postData} />
        <PostContent content={postData.content} />
      </article>
    </>
  );
}
