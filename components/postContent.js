import {Markdown} from "./atoms";

export default function Content({content}) {
  return (
    <section className={``}>
      <Markdown markdown={content} />
    </section>
  );
}
