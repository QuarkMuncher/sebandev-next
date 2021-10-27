import Head from "next/head";
import { getSortedPostsData } from "../../lib/posts";
import { Title } from "../../components/atoms";
import { NavBar } from "../../components/molecules";
import PostCard from "../../components/organisms/postCard/postCard";

export async function getStaticProps() {
  const postData = getSortedPostsData();

  return {
    props: {
      postData,
    },
  };
}

export default function Index({ postData }) {
  return (
    <>
      <Head>
        <title>Blog | seban.dev</title>
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
      <main>
        <Title text="Blog" />
        <ul className="flex flex-col gap-3 mt-3">
          {postData.map((post) => {
            return <PostCard key={post.slug} {...post} />;
          })}
        </ul>
      </main>
    </>
  );
}
