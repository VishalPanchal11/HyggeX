import { mainList } from "../assets/Constants";
import hint from "../assets/images/hint.svg";
import sound from "../assets/images/sound.svg";
import reload from "../assets/images/reload.svg";
import fullscreen from "../assets/images/fullscreen.svg";
import leftArrow from "../assets/images/leftArrow.svg";
import rightArrow from "../assets/images/rightArrow.svg";

const Hero = () => {
  return (
    <div className="">
      <h1 className="mt-[20px] font-bold text-[2rem] leading-[39px] w-full font-montserrat bg-gradient-to-b from-[#06286E] to-[#164EC0] text-transparent bg-clip-text">
        Relations and Functions ( Mathematics )
      </h1>
      <div className="mt-[56px] flex flex-col items-center justify-center">
        <div className="flex gap-10 ">
          {mainList.map((item) => (
            <button className="flex justify-center h-[29px] first:w-[82px] px-6 font-medium first:font-bold text-[#696671] first:text-[#06286E] first:border-b-[3px] border-[#06286E] font-inter text-xl leading-[24.2px]  cursor-pointer ">
              {item}
            </button>
          ))}
        </div>
        <div className=" flex items-start justify-between my-8 w-[712px] h-[393.19px] rounded-[42.51px] bg-gradient-to-bl from-[#06286E] to-[#1F80EB]">
          <button className="relative top-[34.01px] left-[34.01px]">
            <img src={hint} alt="hint" />
          </button>
          <p className="flex h-full items-center text-white leading-[45.91px] font-bold text-[38.26px] font-[Lato] ">
            9 + 6 + 7x - 2x - 3
          </p>
          <button className="relative top-[34.01px] right-[34.01px] ">
            <img src={sound} alt="sound" />
          </button>
        </div>
        <div className="w-[612px] flex justify-between items-center h-[60px] ">
          <button>
            <img src={reload} alt="reload" />
          </button>
          <div className="flex justify-between items-center h-full w-[272px]">
            <button>
              <img src={leftArrow} alt="leftArrow" />
            </button>
            <p className="font-inter text-2xl text-[#202B37] leading-[29.05px] font-bold ">
              01/10
            </p>
            <button>
              <img src={rightArrow} alt="rightArrow" />
            </button>
          </div>
          <button>
            <img src={fullscreen} alt="full-screen" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
