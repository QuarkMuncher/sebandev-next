import styles from './container.module.scss';


export default function Container({children}) {
  return <div className={`${styles.container} max-w-2xl mx-auto py-16`}>{children}</div>;
}
