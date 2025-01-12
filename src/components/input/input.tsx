'use client'
import { ReactNode, InputHTMLAttributes, useState } from "react";

interface inputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    disabled?: boolean;
    label?: string;
    name?: string;
    type?: string;
    value?: string | number;
    error?: string | undefined;
    placeholder?: string;
    leftIcon?: ReactNode;
}

export default function Input({ className, disabled, label, name, value, type, onChange, error, placeholder, leftIcon, ...props }: inputProps) {
    const [focus, setFocus] = useState(false)


    return (
        <div className="flex flex-col w-full gap-1">
            { label ? <label htmlFor={name} className={`text-[12px] ${focus ? "text-primary" : ""}`}>{label}</label> : "" }

            <div className={`flex items-center gap-1 relative rounded-lg bg-white dark:bg-dark dark:text-gray w-full border p-1 duration-500 
                ${error && !focus ? "border-red-500 text-red-500 " : "border-gray/[0.3] dark:border-gray-500/[0.4]"}
                ${focus ? "border border-primary shadow-input-active" : ""}
                ${className}
            `}>
                <span className={`${!focus ? "opacity-[0.4]": "text-primary"} ${leftIcon ? "pl-2" : ""}`}>{ leftIcon }</span>
                <input 
                    className={`p-2 w-full outline-none bg-transparent
                        ${className} 
                        ${disabled ? "opacity-[0.25]" : ""}
                    `}
                    name={name}
                    id={name}
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    onChange={onChange}
                    { ...props }
                />

            </div>
            
            { error && !focus ? <p className="px-2 text-[12px] bg-white text-red-600">{error}</p> : "" }
        </div>
    )
}