import styles from './smallTitle.module.scss';

export default function SmallTitle({text, className}) {
  return (
    <h1 className={`${styles.smallTitle} ${className} text-3xl sm:text-4`}>{text}</h1>
  )
}