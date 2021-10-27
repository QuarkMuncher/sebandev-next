import Head from "next/head";
import { getPersonData } from "../lib/person";
import { getSortedPostsData } from "../lib/posts";
import { Date, InternalLink } from "../components/atoms";
import Profile from "../components/molecules/profile/profile";
import { NavBar } from "../components/molecules";

export async function getStaticProps() {
  const personData = getPersonData();
  const allPostsData = getSortedPostsData();

  return {
    props: {
      personData,
      allPostsData,
    },
  };
}

export default function Home({ allPostsData, personData }) {
  return (
    <>
      <Head>
        <title>Home | seban.dev</title>
      </Head>
      <NavBar
        links={[
          {
            path: "/",
            text: "Home",
            isActive: true,
          },
          {
            path: "/blog",
            text: "Blog",
            isActive: false,
          },
        ]}
      />
      <main>
        <Profile data={personData} />
        <section>
          <h2 className={`text-2xl sm:text-3xl`}>Recent Posts</h2>
          <ul className={`flex flex-col gap-2 mt-3`}>
            {allPostsData.length < 1 ? (
              <h1 className="text-xl">There seems to be no posts</h1>
            ) : (
              allPostsData.slice(0, 4).map(({ slug, date, title }) => (
                <li
                  key={slug}
                  className={`transition duration-200 ease-in rounded p-2 w-max hover:shadow`}
                >
                  <InternalLink href={`/blog/post/${slug}`}>
                    {title}
                  </InternalLink>
                  <br />
                  <small>
                    <Date dateString={date} />
                  </small>
                </li>
              ))
            )}
          </ul>
        </section>
      </main>
    </>
  );
}
