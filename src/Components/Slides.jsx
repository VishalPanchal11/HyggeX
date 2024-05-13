import { useState } from "react";
import leftArrow from "../assets/images/leftArrow.svg";
import rightArrow from "../assets/images/rightArrow.svg";

const Slides = () => {
  const [slideNo, setSlideNo] = useState(0);
  const handleSliding = (left,right) => {
    left && slideNo>0 ? setSlideNo(slideNo - 1) :{};
    right && slideNo<10 ? setSlideNo(slideNo + 1) :{};
  };
  return (
    <div className="flex justify-between items-center max-md:gap-[20px] h-full w-[272px] max-md:w-[160px]">
      <button onClick={() => handleSliding(true,false)}>
        <img
          src={leftArrow}
          alt="leftArrow"
          className="max-md:h-10 max-md:w-10 "
        />
      </button>
      <p className="font-inter text-2xl  text-[#202B37] leading-[29.05px] font-bold ">
        {slideNo===10?"":"0"}{slideNo}/10
      </p>
      <button onClick={() => handleSliding(false,true)}>
        <img
          src={rightArrow}
          alt="rightArrow"
          className="max-md:h-10 max-md:w-10 "
        />
      </button>
    </div>
  );
};

export default Slides;
