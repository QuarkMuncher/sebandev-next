import styled, {css} from 'styled-components';

const base = css`

`;

const StyledExternalLink = styled.h1`
  
`;

const StyledLink = styled.a`
  
`;

export default function Link({href, external, children}) {
  return (
    <>
      {external
        ? (<StyledLink href={href}>{children}</StyledLink>)
        : (<StyledExternalLink href={href}>
          <a>{children}</a>
          </StyledExternalLink>)}
    </>
  );
}
