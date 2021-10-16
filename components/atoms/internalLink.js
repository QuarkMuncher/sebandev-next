import Link from 'next/link';
import styled from "styled-components";
import {motion} from 'framer-motion';

const StyledLink = styled(motion.a)`
  display: inline-block;
  //color: ${props => props.theme.colors.secondary};
   background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
`;

export default function InternalLink({href, children}) {
  return (
    <Link href={href} passHref>
      <StyledLink whileHover={{ scale: 1.1 }}>{children}</StyledLink>
    </Link>
  );
}
