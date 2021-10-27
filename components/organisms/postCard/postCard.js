import { CardBody, SubTitle, Author, Date } from "../../atoms";
import { CardTitle, Tags } from "../../molecules";

export default function PostCard({
  title,
  subTitle,
  slug,
  author,
  date,
  tags,
}) {
  console.log(date);
  return (
    <CardBody>
      <CardTitle href={`/blog/post/${slug}`} text={title} />
      <SubTitle text={subTitle} />
      <Author name={author} />
      <Tags tags={tags} />
      <small>
        <Date dateString={date} />
      </small>
    </CardBody>
  );
}
