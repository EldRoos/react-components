import * as React from "react";
import "./check-box-style.scss";

export interface CheckBoxProps {
    name: string;
    checked: boolean;
    onChange: (event: any) => void;
    id?: string;
    className?: string;
    label?: string;
    topLabel?: string;
    disabled?: boolean;
    inline?: boolean;
    description?: string;
    error?: string;
    reference?: React.RefObject<any>;
}

export const CheckBox: React.FunctionComponent<CheckBoxProps> = (props: CheckBoxProps): React.ReactElement<void> => {
    const id = props.id || `${props.name}-${(Math.random() * 1000) + (new Date()).getTime()}`;
    return (
        <div className={"form-group custom-checkbox" + (props.inline ? " inline" : "")}>
            <div className={"input-field" + (props.className ? ` ${props.className}` : "")}>
                {props.topLabel && <label className="checkbox-toplabel">{props.topLabel}</label>}

                <div className="custom-control">
                    <input
                        type="checkbox"
                        className="custom-control-input"
                        id={id}
                        disabled={props.disabled}
                        name={props.name}
                        checked={props.checked}
                        onChange={props.onChange}
                        ref={props.reference}
                    />
                    {props.label && <label className="custom-control-label" htmlFor={id}>{props.label}</label>}
                    {props.description && <span className="checkbox-description">{props.description}</span>}
                </div>
                {props.error && <div className="alert alert-danger">{props.error}</div>}
            </div>
        </div>
    );
};
