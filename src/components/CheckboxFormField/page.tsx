import { ChangeEventHandler } from "react";

interface CheckboxFormFieldProps {
    label: string;
    optionsList: {
        id: number;
        nameOption: string;
        valueOption: string;
    }[];
    selectedList: string[];
    onChange: ChangeEventHandler<HTMLInputElement> | undefined
}

export default function CheckboxFormField({ label, optionsList, selectedList, onChange }: CheckboxFormFieldProps): React.JSX.Element {
    return (
        <div className="container-form-field">
            <label className="form-field-label">{label}</label>
            <div className="form-field-options">
                {
                    optionsList.map((option) => (
                        <label key={option.id} className="form-field-option">
                            <input 
                                type="checkbox" 
                                value={option.valueOption} 
                                onChange={onChange}
                                checked={selectedList.includes(option.valueOption)}
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