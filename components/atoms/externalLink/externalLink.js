export default function ExternalLink({href, children, className}) {

  return (
    <a
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    className={`${className? `${className} ` : ''}transition duration-100 ease-in scale-100 active:scale-90 hover:text-red-700 text-blue-700 text-md inline-block no-underline`}>
      {children}<span className={`inline-block w-1`} /><i className='fas fa-external-link-alt' aria-hidden/>
    </a>
  );
}
