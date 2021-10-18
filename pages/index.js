import Head from 'next/head'
import {getPersonData} from '../lib/person';
import {getSortedPostsData} from "../lib/posts";
import {Date, InternalLink} from '../components/atoms';
import Profile from '../components/molecules/profile/profile';
import {NavBar} from "../components/molecules";

export async function getStaticProps() {
  const personData = getPersonData();
  const allPostsData = getSortedPostsData();

  return {
    props: {
      personData,
      allPostsData
    }
  };
}

export default function Home({allPostsData, personData}) {
  return (
    <>
      <Head>
        <title>Home | seban.dev</title>
      </Head>
      <NavBar links={[
        {
          path: '/',
          text: 'Home',
          isActive: true
        },
        {
          path: '/blog',
          text: 'Blog',
          isActive: false
        }
      ]} />
      <main>
        <Profile data={personData} />
        <section>
          <h2 className={`text-2xl sm:text-3xl`}>Blog</h2>
          <ul className={`flex flex-col gap-2 mt-3`}>
            {allPostsData.map(({id, date, title}) => (
              <li key={id}>
                <InternalLink href={`/blog/post/${id}`}>
                  {title}
                </InternalLink>
                <br/>
                <small>
                  <Date dateString={date}/>
                </small>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
