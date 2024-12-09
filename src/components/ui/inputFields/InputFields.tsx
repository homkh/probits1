import React from "react";

interface FormsProps {
  text: string;
  placeholder: string;
  type?: string;
}

const InputFields: React.FC<FormsProps> = ({
  type = "text",
  text,
  placeholder,
}) => {
  return (
    <div className="z-0">
      <label className="mb-0.5 text-base block">{text}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="px-4 py-2 text-base rounded-md bg-slate-900 border border-[#85849E66]/40 w-full outline-none"
      />
    </div>
  );
};

export default InputFields;
