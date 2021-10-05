import {getAllPostIds, getPostData} from "../../lib/posts";
import Head from "next/head";
import Layout from "../../components/layout";
import Date from '../../components/date';
import PostContent from '../../components/postContent';
import utilStyles from '../../styles/utils.module.scss';
import styles from './[id].module.scss';

export async function getStaticProps({params}) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  };
}

export default function Post({postData}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title} | Seban.dev Blog</title>
      </Head>
      <article className={styles.article}>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div>
          <Date dateString={postData.date} />
        </div>
        <PostContent content={postData.content} />
      </article>
    </Layout>
  );
}