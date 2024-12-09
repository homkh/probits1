import Image from "next/image";
import messagesIcon from "../../public/assets/icon/messageIcon.svg";

interface MessageBoxProps {
  onClick: () => void;
}

const MessageBox: React.FC<MessageBoxProps> = ({ onClick }) => {
  return (
    <>
      {/* <div
        onClick={onClick}
        className="bg-[#3571F0] p-3 rounded-full h-[48px] w-[48px] flex items-center justify-center cursor-pointer"
      >
        <Image
          src={messagesIcon}
          height={24}
          width={24}
          alt="Message Icon"
          className="object-contain"
        />
      </div> */}

      <div
        onClick={onClick}
        className="relative bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer"
      >
        <Image
          src={messagesIcon}
          // height={24}
          // width={24}
          alt="Message Icon"
          className="object-contain"
        />
      </div>
    </>
  );
};

export default MessageBox;
