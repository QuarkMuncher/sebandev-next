import {useContext} from "react";
import ThemeContext from "../../../Context";
import Link from 'next/link';
import styles from './internalLink.module.scss';
import {motion} from 'framer-motion';

export default function InternalLink({href, children}) {
  const theme = useContext(ThemeContext);

  return (
    <Link href={href} passHref>
      <motion.a
        className={`${styles.link} text-md`}
        transition={{
          duration: 0.1
        }}
        whileHover={{
          background: `linear-gradient(to right, ${theme.colors.quaternary} 100%, ${theme.colors.secondary} 100%)`,
          backgroundClip: 'text'
        }}
        whileTap={{
          scale: 0.9,
        }}
      >
        {children}
      </motion.a>
    </Link>
  );
}
