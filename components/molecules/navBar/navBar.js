import {Bar, NavLink} from '../../atoms';
import styles from './navBar.module.scss';

export default function NavBar({links}) {
  return (
    <Bar>
      {links.map(link => (<NavLink
        key={link.path}
        to={link.path}
        text={link.text}
      />))}
    </Bar>
  )
}
