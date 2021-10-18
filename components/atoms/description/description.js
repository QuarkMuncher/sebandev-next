import styles from './description.module.scss';

export default function Description({description}) {
  return (
    <section className={`${styles.description} text-sm italic text-gray-800`}>
      {description}
    </section>
  )
}