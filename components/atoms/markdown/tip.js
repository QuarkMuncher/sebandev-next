export default function Tip({children}) {
    return (
        <blockquote className={`relative my-4 px-4 pt-11 pb-1 italic quote bg-blue-100 text-blue-900`}>
            <div className={`absolute z-0 top-0 lef-0 right-0 py-1 pl-5 w-full bg-blue-200`}>Information</div>
            <div className={`top-[-1rem] right-[96%] mr-2 hidden md:block text-7xl text-blue-400 absolute z-0 leading-none select-none`} aria-hidden>&amp;</div>
            <p className={`z-10 mb-5 relative`}>{children[0]}</p>
        </blockquote>
    );
}