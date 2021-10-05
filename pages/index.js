import Head from 'next/head'
import Link from 'next/link';
import {getPersonData} from '../lib/person';
import {getSortedPostsData} from "../lib/posts";
import Container from "../components/container";
import {Date} from '../components/atoms';
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
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({id, date, title}) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`blog/${id}`}>
                  <a>{title}</a>
                </Link>
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
