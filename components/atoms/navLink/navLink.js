import {useRouter} from "next/router";
import Link from 'next/link';
import styles from './navLink.module.scss';

export default function NavLink({to, text}) {
  const router = useRouter();

  return (
    <li className={`${styles.navLink}`}>
      <Link href={to} passHref>
        <a className={`${styles.link} ${(router.pathname.replaceAll('/post/[id]', '') === to) ? 'underline text-gray-700' : 'text-gray-900'} `}>{text}</a>
      </Link>
    </li>
  );
}
