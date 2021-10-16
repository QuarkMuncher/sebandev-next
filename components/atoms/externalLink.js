import styled from 'styled-components';

const StyledLink = styled.a`
  color: ${props => props.theme.colors.secondary};
`;

export default function ExternalLink({href, children}) {
  return (
    <StyledLink href={href}>{children}</StyledLink>
  );
}
