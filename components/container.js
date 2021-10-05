import styled from "styled-components";

const Div = styled.div`
  .container {
    max-width: 36rem;
    padding: 0 1rem;
    margin: 3rem auto 6rem;
  }
`;

export default function Container({children}) {
  return <Div>{children}</Div>;
}