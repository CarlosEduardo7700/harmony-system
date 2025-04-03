import { ReactNode } from "react";

interface ModalProps {
    isOpen: boolean;
    children: ReactNode;
}

export default function Modal({ isOpen, children }: ModalProps): React.JSX.Element | null {
    if (!isOpen) return null;

    return (
        <div className="background-modal">
            <div className="container-modal">
                {children}
            </div>
        </div>
    );
}