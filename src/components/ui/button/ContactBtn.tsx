import React from "react";

interface ContactBtnProps {
  onClick?: () => void;
}

const ContactBtn: React.FC<ContactBtnProps> = ({ onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-gradient-to-b from-[#3571F0] to-[#2650AA] text-white text-sm font-medium font-gotham py-1 px-2 lg:py-2 lg:px-4 rounded-lg transition-all duration-500 ease-in-out hover:from-[#2650AA] hover:to-[#3571F0]"
      >
        Contact Us
      </button>
    </div>
  );
};

export default ContactBtn;
