import companyLogo from "../assets/images/companyLogo.svg";
import hyggex from "../assets/images/hyggex.svg";
import plus from "../assets/images/plus.svg";
const Flashcard = () => {
  return (
    <div className="flex justify-between items-center my-20">
      <div className="flex justify-center items-center h-[100px] ">
        <div className="flex justify-center items-center h-20 w-20 m-[10px] rounded-full shadow-circular">
          <img src={companyLogo} alt="Logo" />
        </div>
        <div className=" mt-[5px] h-full">
          <p className="font-inter font-bold text-[12.4px] leading-[15.01px] text-[#696671] my-[10.63px]">Published by</p>
          <img src={hyggex} alt="Hyggex" />
        </div>
      </div>
      <div className="flex justify-center items-center">
<img src={plus} alt="create" className="m-[10px]" />
<h1 className="bg-gradient-to-b from-[#06286E] to-[#164EC0] text-transparent bg-clip-text leading-[33.89px] text-[28px] font-semibold font-inter ">Create Flashcard</h1>
      </div>
    </div>
  );
};

export default Flashcard;
