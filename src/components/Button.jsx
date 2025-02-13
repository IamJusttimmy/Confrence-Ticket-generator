const Button = ({
  leftText = "Cancel",
  rightText = "Next",
  onLeftClick = () => {},
  onRightClick = () => {},
}) => {
  return (
    <div className="items-center grid md:grid-cols-2 gap-4 bg-[#041E23] md:border md:border-[#07373F] rounded-[25px] px-5">
      <button
        className="bg-transparent border border-[#24A0B5] text-[#24A0B5] py-2 rounded-md"
        onClick={onLeftClick}
      >
        {leftText}
      </button>
      <button
        className="bg-[#00B4D8] text-white py-2 rounded-md font-extralight"
        onClick={onRightClick}
      >
        {rightText}
      </button>
    </div>
  );
};

export default Button;
