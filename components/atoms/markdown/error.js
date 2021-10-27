export default function Error({ children }) {
  return (
    <blockquote
      className={`relative my-4 px-4 pt-11 pb-1 italic quote bg-red-100 text-red-900`}
    >
      <div
        className={`absolute z-0 top-0 lef-0 right-0 py-1 pl-5 w-full bg-red-200`}
      >
        Information
      </div>
      <div
        className={`top-[-1rem] right-[96%] mr-2 hidden md:block text-7xl text-red-500 absolute z-0 leading-none select-none`}
        aria-hidden
      >
        !
      </div>
      <p className={`z-10 mb-5 relative`}>
        {children.length > 1 ? children : children[0]}
      </p>
    </blockquote>
  );
}
