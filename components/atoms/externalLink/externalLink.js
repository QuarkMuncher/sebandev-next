import {useContext} from "react";
import ThemeContext from "../../../Context";
import styles from './externalLink.module.scss';
import {motion} from 'framer-motion';

export default function InternalLink({href, children}) {
  const theme = useContext(ThemeContext);

  return (
    <motion.a
      className={`${styles.link}`}
      transition={{
        duration: 0.1
      }}
      whileHover={{
        background: `linear-gradient(to right, ${theme.colors.secondary} 100%, ${theme.colors.quaternary} 100%)`,
        backgroundClip: 'text'
      }}
      whileTap={{
        scale: 0.9,
      }}
    >
      {children}
    </motion.a>
  );
}
