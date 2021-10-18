import {getAllPostIds, getPostData} from "../../../lib/posts";
import Head from "next/head";
import {PostHead} from "../../../components/molecules";
import PostContent from '../../../components/postContent';
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
    <>
      <Head>
        <title>{postData.title} | Seban.dev Blog</title>
      </Head>
      <article className={styles.article}>
        <PostHead data={{
          title: postData.title,
          subTitle: postData.subTitle,
          date: postData.date
        }} />
        <PostContent content={postData.content} />
      </article>
    </>
  );
}
