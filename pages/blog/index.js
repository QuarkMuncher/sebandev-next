import {NavBar} from "../../components/molecules";

export default function Index() {
  return (
    <>
      <NavBar links={[
        {
          path: '/',
          text: 'Home',
          isActive: false
        },
        {
          path: '/blog',
          text: 'Blog',
          isActive: true
        }
      ]} />
    </>
  );
}