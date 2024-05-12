import homeIcon from "../assets/images/homeIcon.svg";
import smallRightArrow from "../assets/images/smallRightArrow.svg";
const Path = () => {
  return (
    <div className="flex items-center font-inter py-[39px] leading-[21.78px] font-medium even:text-[#696671]">
      <img src={homeIcon} alt="Home" />
      <img src={smallRightArrow} alt="arrow" />
      <a>Flashcard</a>
      <img src={smallRightArrow} alt="arrow" />
      <a>Mathematics</a>
      <img src={smallRightArrow} alt="arrow" />
      <p className="font-semibold leading-[21.78px]  text-[#06286E]">
        Relation and Function
      </p>
    </div>
  );
};

export default Path;
