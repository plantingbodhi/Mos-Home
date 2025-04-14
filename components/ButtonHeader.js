"use client";

const ButtonHeader = ({ title = "Header Button", onClick = () => {} }) => {
  return (
    <button
      className="px-4 py-2 bg-transparent hover:bg-transparent text-black hover:text-[#d988d7] transition-colors"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default ButtonHeader;
