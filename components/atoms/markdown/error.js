export default function Error({children}) {
    return (
        <blockquote className={`relative p-4 italic quote`}>
            <div className={`top-0 right-[96%] mr-2 hidden md:block text-7xl text-red-500 absolute z-0 leading-none`} aria-hidden>!</div>
            <p className={`z-10 mb-1 relative`}>{children[0]}</p>
        </blockquote>
    );
}