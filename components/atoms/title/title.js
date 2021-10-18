import styles from './title.module.scss';

export default function Title({text, className}) {
  return (
    <h1 className={`${styles.title} ${className} text-gray-900 text-3xl sm:text-4xl md:text-5xl`}>{text}</h1>
  );
}
