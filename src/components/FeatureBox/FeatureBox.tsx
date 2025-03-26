interface FeatureBoxProps {
    text: string;
}

export default function FeatureBox({text}: FeatureBoxProps) {
    return (
        <button className="container-feature-box">
            <p>{text}</p>
        </button>
    );
}