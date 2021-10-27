import {parseISO, format, formatISO} from "date-fns";

export default function Date({dateString}) {
  console.log(dateString);
  let date = parseISO(dateString);
  return (
    <time className={`text-red-700 italic`} dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
  );
}
 