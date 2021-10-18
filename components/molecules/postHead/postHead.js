import styles from './postHead.module.scss';
import {SmallTitle, SubTitle, Date} from "../../atoms";

export default function PostHead({data}) {
  return (
    <section className={`${styles.postHead} mb-5`}>
      <SmallTitle text={data.title} />
      <SubTitle text={data.subTitle} />
      <Date dateString={data.date} />
    </section>
  )
}