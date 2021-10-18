import Head from 'next/head'
import {getPersonData} from '../lib/person';
import {getSortedPostsData} from "../lib/posts";
import Container from "../components/atoms/container/container";
import {Date, InternalLink} from '../components/atoms';
import Profile from '../components/profile';
import utilStyles from '../styles/utils.module.scss'

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
    <Container>
      <Head>
        <title>Home | seban.dev</title>
      </Head>
      <main>
        <Profile data={personData} />
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={`text-3xl`}>Blog</h2>
          <ul className={`flex flex-col gap-3 mt-4`}>
            {allPostsData.map(({id, date, title}) => (
              <li key={id}>
                <InternalLink href={`/blog/${id}`}>
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
    </Container>
  );
}
