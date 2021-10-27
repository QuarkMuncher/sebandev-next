export default function CardBody({ children }) {
  return (
    <li
      className={`transition duration-200 ease-in border-b-2 rounded p-2 hover:shadow`}
    >
      {children}
    </li>
  );
}
