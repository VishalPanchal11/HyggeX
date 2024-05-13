import { useState } from "react";
import { mainList } from "./Constants";
import hint from "../assets/images/hint.svg";
import sound from "../assets/images/sound.svg";
const Options = () => {
  const [currentOption, setCurrentOption] = useState(0);
  const handleClick = (index) => {
    setCurrentOption(index);
  };
  return (
    <>
      <div className="flex gap-10 max-lg:gap-[25px] max-md:gap-[15px] max-sm:gap-[0px] ">
        {mainList.map((item, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={`flex justify-center h-[29px] px-6 max-lg:px-5 max-md:px-4 max-sm:px-3  font-inter text-xl leading-[24.2px]  cursor-pointer ${
              index == currentOption
                ? "font-bold text-[#06286E] w-[82px] border-b-[3px] border-[#06286E]"
                : "font-medium text-[#696671]"
            } `}
          >
            {item}
          </button>
        ))}
      </div>
      <div className=" flex items-start justify-between my-8 w-[712px] max-md:w-[80%] min-w-[420px]  h-[393.19px] max-md:h-[294px] max-sm:h-[260px] rounded-[42.51px] bg-gradient-to-bl from-[#06286E] to-[#1F80EB]">
        <button className="relative top-[34.01px] left-[34.01px]">
          <img src={hint} alt="hint" />
        </button>
        {mainList.map((item, index) => (
          <p
            className={`flex h-full items-center text-white leading-[45.91px] font-bold text-[38.26px] font-[Lato] ${
              currentOption !== index ? "hidden" : ""
            }`}
          >
            {index === 0 ? "9 + 6 + 7x - 2x - 3" : item}
          </p>
        ))}

        <button className="relative top-[34.01px] right-[34.01px] ">
          <img src={sound} alt="sound" />
        </button>
      </div>
    </>
  );
};
export default Options;
