export default function Warning({children}) {
    return (
        <blockquote className={`relative p-4 italic quote`}>
            <div className={`top-[-10px] right-[96%] mr-2 hidden md:block text-7xl text-yellow-300 absolute z-0 leading-none`} aria-hidden>&times;</div>
            <p className={`z-10 mb-1 relative`}>{children[0]}</p>
        </blockquote>
    );
}