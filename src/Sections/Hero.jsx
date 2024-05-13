import reload from "../assets/images/reload.svg";
import fullscreen from "../assets/images/fullscreen.svg";
import Options from "../Components/Options";
import handleClick from "../Components/Options";
import Slides from "../Components/Slides";
const Hero = () => {
  const index=0;
  return (
    <div className="">
      <h1 className="mt-[20px] font-bold text-[2rem] max-md:text-[1.5rem] max-sm:text-base leading-[39px] max-md:leading-[30px] max-sm:leading-5 w-full font-montserrat bg-gradient-to-b from-[#06286E] to-[#164EC0] text-transparent bg-clip-text">
        Relations and Functions ( Mathematics )
      </h1>
      <div className="mt-[56px] flex flex-col items-center justify-center">
        <Options />
        
        <div className="w-[612px] max-md:w-[306px] flex justify-between items-center h-[60px] ">
          <button onClick={handleClick(index)}>
            <img src={reload} alt="reload" />
          </button>
          <Slides/>
          <button>
            <img src={fullscreen} alt="full-screen" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
