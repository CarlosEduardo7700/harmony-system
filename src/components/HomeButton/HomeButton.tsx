import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function HomeButton(): React.JSX.Element {
    return (
        <Link href="/" className="circle-button">
            <FaHome size={30}/>
        </Link>
    );
}