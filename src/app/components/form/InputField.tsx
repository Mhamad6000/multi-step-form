import React from "react";
import { useFormContext } from "react-hook-form";
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hasError?: boolean;
  errorMessage?: string;
  placeholder?: string;
  className?: string;
  type?: string;
  name: string;
}

const InputField = ({
  label,
  hasError,
  errorMessage,
  placeholder,
  className,
  type,
  name,
  ...props
}: InputProps) => {
  const { register } = useFormContext();
  return (
    <div className="">
      <div className="flex justify-between mb-1">
        <label htmlFor="name" className="text-custom-primary-marine-blue">
          {label}
        </label>
        <div className="">
          {hasError && (
            <span className="text-custom-primary-strawberry-red text-sm">
              {errorMessage}
            </span>
          )}
        </div>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className={`custom-input w-full ${className} placeholder:font-ubuntu-medium text-custom-primary-marine-blue`}
        {...props}
        {...register(name, {
          required: props.required,
        })}
      />
    </div>
  );
};
export default InputField;
