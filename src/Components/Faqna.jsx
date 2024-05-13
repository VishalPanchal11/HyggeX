import { useState } from "react";
import dropdown from "../assets/images/dropdown.svg";

const Faqna = ({ question,answer }) => {
  const [showAns, setShowAns] = useState(false);
  const handleClick = () => {
    setShowAns(!showAns);
  };
  return (
    <div className={`  rounded-[12px] bg-gradient-to-l p-[1px] from-[#082299] to-[#217EEC] ${showAns?"h-[138px]":"h-[58px]"}`}>
      <div className="px-6 rounded-[11px] bg-white h-full w-full">
        <div className={`flex items-center justify-between h-[56px] w-full ${showAns?"border border-white border-b-[#082299]":""}`}>
          <h3 className="leading-[26p] text-base font-inter font-semibold text-[#28262C] ">
            {question}
          </h3>
          <button
            onClick={() => handleClick()}
            className={`${showAns ? "rotate-180" : ""}`}
          >
            <img src={dropdown} alt="show more" />
          </button>
        </div>
        <div className={`h-[80px] w-full flex justify-center items-center ${showAns?"block":"hidden"}`}>
        <h3 className="leading-[26p] text-base font-inter font-medium text-justify text-[#28262C] ">
            {answer}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Faqna;
