import Link from "next/link";

interface NavBoxProps {
    text: string;
    url: string;
}

export default function NavBox({text, url}: NavBoxProps): React.JSX.Element {
    return (
        <Link href={url} className="container-nav-box">
            <p>{text}</p>
        </Link>
    );
}