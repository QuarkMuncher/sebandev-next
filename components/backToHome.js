import styled from 'styled-components';
import Link from "next/link";

const Div = styled.div`
  .backToHome {
    margin: 3rem 0 0;
  }
`;

export default function BackToHome() {
  return (
    <Div>
      <Link href='/'>
        <a>← Back to home</a>
      </Link>
    </Div>
  );
}
