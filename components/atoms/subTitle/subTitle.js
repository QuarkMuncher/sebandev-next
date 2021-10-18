import styles from './subTitle.module.scss';

export default function SubTitle({text, className}) {
  return (
    <h2 className={`${styles.subTitle} ${className} text-xl italic`}>{text}</h2>
  )
}
