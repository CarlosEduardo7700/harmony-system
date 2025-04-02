import { ReactNode } from "react";

interface ModalProps {
    isOpen: boolean;
    children: ReactNode;
}

export default function Modal({ isOpen, children }: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className="background-modal">
            <div className="container-modal">
                {children}
            </div>
        </div>
    );
}