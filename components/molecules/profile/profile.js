import {Title, Description, ExternalLink} from '../../atoms';
import styles from './profile.module.scss';

export default function Profile({data}) {
  return (
    <section className={`${styles.profile} mb-5`}>
      <Title text={data.name} />
      <ExternalLink href={data.github}>{data['github-username']}</ExternalLink>
      <Description description={data.description} />
    </section>
  );
}
