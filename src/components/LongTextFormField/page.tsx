import { ChangeEventHandler } from "react";

interface LongTextFormFieldProps {
    label: string;
    name: string;
    value: string | number;
    onChange: ChangeEventHandler<HTMLTextAreaElement> | undefined
    required?: boolean;
}

export default function LongTextFormField({ label, name, value, onChange, required = false }: LongTextFormFieldProps): React.JSX.Element {
    return (
        <div className="container-form-field">
            <label htmlFor={name} className="form-field-label">{label}</label>
            <textarea 
                name={name}
                id={name}
                className="form-field-textarea"
                required={required}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}