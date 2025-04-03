import Link from "next/link";

interface FeatureBoxProps {
    text: string;
    urlFeature: string;
}

export default function FeatureBox({text, urlFeature}: FeatureBoxProps): React.JSX.Element {
    return (
        <Link href={urlFeature} className="container-feature-box">
            <p>{text}</p>
        </Link>
    );
}