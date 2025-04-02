import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    styles?: string;
    children: ReactNode;
}

export default function Button({ styles, children, ...props }: ButtonProps) {
    return (
        <button {...props} className={`form-button ${styles}`}>
            {children}
        </button>
    );
}