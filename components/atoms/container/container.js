import styles from './container.module.scss';


export default function Container({children}) {
  return <div className={`${styles.container} max-w-2xl mx-auto pt-12 pb-16 md:px-0 px-4`}>{children}</div>;
}
