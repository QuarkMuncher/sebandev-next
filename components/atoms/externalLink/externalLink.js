import {useContext} from "react";
import ThemeContext from "../../../Context";
import styles from './externalLink.module.scss';
import {motion} from 'framer-motion';

export default function InternalLink({href, children}) {
  const theme = useContext(ThemeContext);

  return (
    <motion.a
      className={`${styles.link} text-md inline-block no-underline`}
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
      href={href}
      target='_blank'
    >
      {children}<span className={`inline-block w-1`} /><i className='fas fa-external-link-alt' aria-hidden/>
    </motion.a>
  );
}
