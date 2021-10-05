import {parseISO, format} from "date-fns";
import styled from 'styled-components';

const Time = styled.time`
  color: ${props => props.theme.colors.primary};
  font-style: italic;
`;

export default function Date({dateString}) {
  const date = parseISO(dateString);
  return (
    <Time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</Time>
  );
}
