import React from "react";

interface InputProps {
  type: string;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
  className?: string;
}

const InputForm: React.FC<InputProps> = ({
  type,
  name,
  value,
  onChange,
  required = false,
  placeholder = "",
  className = "border border-gray-300 rounded-md p-2 mr-4 w-full",
}) => {
  return (
    <div>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={` ${className}`}
      />
    </div>
  );
};

export default InputForm;
