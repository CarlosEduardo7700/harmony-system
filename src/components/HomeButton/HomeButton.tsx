import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function HomeButton(): React.JSX.Element {
    return (
        <Link href="/" className="back-home-button">
            <FaHome size={30}/>
        </Link>
    );
}