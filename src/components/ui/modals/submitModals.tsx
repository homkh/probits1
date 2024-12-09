import React from "react";
import { X, CircleCheckBig } from "lucide-react";

interface ModalsProps {
  onClose: () => void;
  message?: string;
}

const SubmitModals: React.FC<ModalsProps> = ({ onClose, message }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 top-0">
      <div className="bg-white w-[400px] rounded-xl px-11 py-14 shadow-2xl relative">
        <button
          type="button"
          className="absolute top-3 right-4 hover:bg-gray-400 hover:rounded-sm hover:border-slate-900 transition-all duration-300"
          onClick={onClose}
        >
          <X size={20} color="#3C3D37" />
        </button>
        <div className="flex flex-col items-center gap-4">
          <p className="text-lg text-gray-800 text-center">{message}</p>
          <CircleCheckBig size={40} color="#4379F2" />
          <button
            type="button"
            className="px-5 py-3 bg-blue-700 text-white hover:text-black rounded-md outline-none hover:bg-blue-600 hover:scale-105 transition-all duration-300 ease-in-out"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmitModals;
