import companyLogo from "../assets/images/companyLogo.svg";
import hyggex from "../assets/images/hyggex.svg";
import plus from "../assets/images/plus.svg";
const Flashcard = () => {
  return (
    <div className="flex justify-between max-lg:justify-around items-center my-20">
      <div className="flex justify-center items-center h-[100px] ">
        <div className="flex justify-center items-center h-20 w-20 m-[10px] rounded-full shadow-circular">
          <img src={companyLogo} alt="Logo max-lg:h-[72px] max-sm:h-[64px] max-lg:w-[72px] max-sm:w-[64px] " />
        </div>
        <div className=" mt-[5px] h-full">
          <p className="font-inter font-bold text-[12.4px] max-lg:text-[11.16px] max-sm:text-[9.92px]  leading-[15.01px] max-lg:leading-[12px] max-sm:leading-[13.5px]  text-[#696671] my-[10.63px]">
            Published by
          </p>
          <img src={hyggex} alt="Hyggex max-lg:h-[32.4px] max-sm:h-[28.8px] max-lg:w-[104.2px] max-sm:w-[92.8px] " />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img src={plus} alt="create" className="m-[10px] max-lg:h-[45px] max-lg:w-[45px] max-sm:h-[40px] max-sm:w-[40px] " />
        <h1 className="bg-gradient-to-b from-[#06286E] to-[#164EC0] text-transparent bg-clip-text leading-[33.89px] max-lg:leading-[31px] max-sm:leading-[28px] text-[28px] max-lg:text-[26px] max-sm:text-[24px] font-semibold font-inter ">
          Create Flashcard
        </h1>
      </div>
    </div>
  );
};

export default Flashcard;
