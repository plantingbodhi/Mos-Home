"use client";

const ButtonOutline = ({ title = "Outline Button", onClick = () => {} }) => {
  return (
    <button
      className="btn bg-white hover:bg-white border-2 border-black text-black hover:text-[#d988d7] hover:border-[#d988d7] transition-colors"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default ButtonOutline;
