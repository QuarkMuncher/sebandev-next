import styles from './bar.module.scss';

export default function Bar({children}) {
  return (
    <nav className={`${styles.bar} flex justify-start w-full mb-4`}>
      <ul className={`list-none flex justify-start gap-5 w-max`}>
        {children}
      </ul>
    </nav>
  );
}
