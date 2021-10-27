import { InternalLink } from "../../atoms";

export default function CardTitle({text, href}) {
    return (
        <InternalLink href={href} className={`text-xl sm:text-2xl`}>{text}</InternalLink>
    );
}