import { navList } from "../Components/Constants";
import navLogo from "../assets/images/navLogo.svg";
import hamburger from "../assets/images/hamburger.svg";
const Nav = () => {
  return (
    <div className=" h-[6.5rem] flex items-center justify-between  ">
      <img src={navLogo} alt="HyggeX" className="cursor-pointer"/>
      <div className="flex items-center justify-center gap-10 max-md:gap-[10px] max-lg:gap-5 font-inter max-sm:hidden">
        {navList.map((item) => (
          <a className="text-center hover:text-black hover:font-medium font-normal text-[18px] text-[#3A3740] leading-[21.78px] cursor-pointer last:w-[8rem] last:h-[3rem] rounded-3xl last:py-[13px] last:bg-gradient-to-b from-[#06286E] to-[#164EC0] last:text-white   ">{item}</a>
        ))}
      </div>
      <img src={hamburger} alt="Menu" className="h-12 w-12 cursor-pointer sm:hidden"/>
    </div>
  );
};

export default Nav;
