export default function Warning({ children }) {
  return (
    <blockquote
      className={`relative my-4 px-4 pt-11 pb-1 italic quote bg-yellow-100 text-yellow-900`}
    >
      <div
        className={`absolute z-0 top-0 lef-0 right-0 py-1 pl-5 w-full bg-yellow-200`}
      >
        Information
      </div>
      <div
        className={`top-[-1.8rem] right-[96%] mr-2 hidden md:block text-7xl text-yellow-400 absolute z-0 leading-none select-none`}
        aria-hidden
      >
        &times;
      </div>
      <p className={`z-10 mb-5 relative`}>
        {children.length > 1 ? children : children[0]}
      </p>
    </blockquote>
  );
}
