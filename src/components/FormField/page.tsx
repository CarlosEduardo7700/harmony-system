import { ChangeEventHandler } from "react";

interface FormFieldProps {
    label: string;
    type: string;
    name: string;
    value: string | number;
    min?: string;
    onChange: ChangeEventHandler<HTMLInputElement> | undefined
    required?: boolean;
}

export default function FormField({ label, type, name, value, min, onChange, required = false }: FormFieldProps) {
    return (
        <div className="container-form-field">
            <label htmlFor={name} className="form-field-label">{label}</label>
            <input 
                type={type} 
                id={name} 
                name={name}
                min={min}
                required={required}
                className="form-field-input"
                value={value}
                onChange={onChange}
            />
        </div>
    );
}