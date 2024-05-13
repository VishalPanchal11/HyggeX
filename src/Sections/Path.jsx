import homeIcon from "../assets/images/homeIcon.svg";
import smallRightArrow from "../assets/images/smallRightArrow.svg";
const Path = () => {
  return (
    <div className="flex items-center font-inter py-[39px] text-[18px] leading-[21.78px] font-medium even:text-[#696671]">
      <a href="/"><img src={homeIcon} alt="Home" /></a>
      <img src={smallRightArrow} alt="arrow" />
      <a className="cursor-pointer">Flashcard</a>
      <img src={smallRightArrow} alt="arrow" />
      <a className="cursor-pointer">Mathematics</a>
      <img src={smallRightArrow} alt="arrow" />
      <p className="font-semibold leading-[21.78px] cursor-pointer text-[#06286E]">
        Relation and Function
      </p>
    </div>
  );
};

export default Path;
