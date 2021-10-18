import {parseISO, format} from "date-fns";
import styles from './date.module.scss';

export default function Date({dateString}) {
  const date = parseISO(dateString);
  return (
    <time className={`${styles.date} text-red-700 italic`} dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
  );
}
