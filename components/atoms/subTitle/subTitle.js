import styles from './subTitle.module.scss';

export default function SubTitle({text, className}) {
  return (
    <h2 className={`${styles.subTitle} text-xl italic ${className}`}>{text}</h2>
  )
}
