import {Title, SubTitle, Date, Author} from "../../atoms";

export default function PostHead({data}) {
  return (
    <section className={`mb-5`}>
      <Title text={data.title} />
      <Author name={data.author} />
      <Date dateString={data.date} />
      <SubTitle text={data.subTitle} className={'mt-2'}/>
    </section>
  )
}