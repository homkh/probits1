import React, { useState } from "react";

interface IProps{
  text:string;
  type: "lookingTo" | "serviceNeeded",
  activeValue:string[];
  handleButtonClick: (type: "lookingTo" | "serviceNeeded", value: string, removeValue: boolean) => void
}

const TransParentBtn= ({ text,type,activeValue,handleButtonClick}:IProps) => {

  const handleToggle = (e:any) => {
    if(e.target.checked){
      handleButtonClick(type,text,false) 
      return;
    }
    handleButtonClick(type,text,true) 

  };

  return (
    <div className="flex items-center backdrop-blur-sm">
      <input
        type="checkbox"
        id={text} 
        name={text}
        value={text}
        onChange={handleToggle}
        className="hidden" 
      />
      <label
        htmlFor={text}
        className={`flex items-center justify-center px-4 py-2 rounded-full text-[12px] font-gotham font-normal tracking-wider border transition duration-300 ease-in-out cursor-pointer ${
          activeValue.includes(text)
            ? "bg-blue-600 text-black border-gray-50"
            : "border-[#7474804D]/50 bg-transparent text-[#DBDBE1] hover:border-[#DBDBE1] hover:text-white hover:shadow-lg hover:scale-x-95"
        }`}
      >
        {text}
      </label>
    </div>
  );
};

export default TransParentBtn;
