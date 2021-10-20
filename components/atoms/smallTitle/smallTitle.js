import styles from './smallTitle.module.scss';

export default function SmallTitle({text, className}) {
  return (
    <h1 className={`${styles.smallTitle} ${className} text-xl sm:text-2xl`}>{text}</h1>
  )
}