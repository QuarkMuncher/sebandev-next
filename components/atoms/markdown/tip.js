export default function Tip({children}) {
    return (
        <blockquote className={`relative px-4 py-8 italic quote`}>
            <div className={`top-0 right-[96%] mr-2 hidden md:block text-7xl text-blue-400 absolute z-0 leading-none`} aria-hidden>&amp;</div>
            <p className={`z-10 mb-1 relative`}>{children[0]}</p>
        </blockquote>
    );
}