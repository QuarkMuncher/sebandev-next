import Title from './title';
import styles from './profile.module.scss';

export default function Profile({data}) {
  return (
    <section className={styles.profile}>
      <Title text={data.name} />

    </section>
  );
}