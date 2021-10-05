import styles from './title.module.scss';

export default function Title({text, className}) {
  return (
    <h1 className={`${styles.title} ${className}`}>{text}</h1>
  );
}