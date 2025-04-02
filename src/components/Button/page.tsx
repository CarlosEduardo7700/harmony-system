import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    styles?: string;
    children: ReactNode;
}

export default function Button({ styles, children, ...props }: ButtonProps) {
    return (
        <button {...props} className={`default-button ${styles}`}>
            {children}
        </button>
    );
}