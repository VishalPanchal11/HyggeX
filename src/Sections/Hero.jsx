import { mainList } from "../assets/Constants";

const Hero = () => {
  return (
    <div className="">
      <h1 className="mt-[20px] font-bold text-[2rem] leading-10 w-full font-montserrat bg-gradient-to-b from-[#06286E] to-[#164EC0] text-transparent bg-clip-text">
        Relations and Functions ( Mathematics )
      </h1>
      <div className="mt-[56px] flex flex-col items-center justify-center">
        <div className="flex gap-10 ">
          {mainList.map((item) => (
            <a className="flex justify-center h-[29px] first:w-[82px] px-6 font-medium first:font-bold text-[#696671] first:text-[#06286E] first:border-b-2 border-[#06286E] font-inter text-xl leading-[24.2px]  cursor-pointer ">
              {item}
            </a>
          ))}
        </div>
        <div className="my-8"></div>
        <div></div>
      </div>
    </div>
  );
};

export default Hero;
