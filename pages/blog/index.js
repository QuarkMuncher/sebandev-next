import Head from 'next/head';
import {getSortedPostsData} from "../../lib/posts";
import {Author, Date, InternalLink, SubTitle, SmallTitle, Title} from '../../components/atoms';
import {NavBar} from "../../components/molecules";

export async function getStaticProps() {
  const postData = getSortedPostsData();

  return {
    props: {
      postData
    }
  }
}

export default function Index({postData}) {
  return (
    <>
      <Head>
        <title>Blog | seban.dev</title>
      </Head>
      <NavBar links={[
        {
          path: '/',
          text: 'Home',
          isActive: false
        },
        {
          path: '/blog',
          text: 'Blog',
          isActive: true
        }
      ]} />
      <main>
        <Title text='Blog' />
        <ul className='flex flex-col gap-2 mt-3'>
          {postData.map(post => (
            <li key={post.slug}>
              <InternalLink href={`/blog/post/${post.slug}`}>{<SmallTitle className={`inline-block`} text={post.title} />}</InternalLink>
              <SubTitle text={post.subTitle} />
              <Author name={post.author} />
              <small>
                <Date dateString={post.date} />
              </small>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}