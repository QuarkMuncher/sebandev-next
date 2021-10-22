import Link from 'next/link';

export default function InternalLink({href, children, className}) {
  return (
    <Link href={href} passHref>
      <a
        className={`${className? `${className} ` : ''}transition duration-100 ease-in scale-100 active:scale-90 text-red-700 hover:text-blue-700 text-md inline-block no-underline`}
      >
        {children}
      </a>
    </Link>
  );
}
