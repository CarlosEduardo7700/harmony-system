import { ChangeEventHandler } from "react";

interface CheckboxFormFieldProps {
    label: string;
    optionsList: {
        id: number;
        nameOption: string;
    }[];
    selectedList: string[];
    onChange: ChangeEventHandler<HTMLInputElement> | undefined
}

export default function CheckboxFormField({ label, optionsList, selectedList, onChange }: CheckboxFormFieldProps) {
    return (
        <div className="container-form-field">
            <label className="form-field-label">{label}</label>
            <div className="form-field-options">
                {
                    optionsList.map((option) => (
                        <label key={option.id} className="form-field-option">
                            <input 
                                type="checkbox" 
                                value={option.nameOption} 
                                onChange={onChange}
                                checked={selectedList.includes(option.nameOption)}
                                className="form-field-checkbox"
                            />
                            {option.nameOption}
                        </label>
                    ))
                }
            </div>
        </div>
    );
}