import { navList } from "./Constants";
import navLogo from "./images/navLogo.svg";
const Nav = () => {
  return (
    <div className="h-[6.5rem] flex items-center justify-between px-[6.5rem]">
      <img src={navLogo} />
      <div className="flex items-center justify-center gap-10 font-inter">
        {navList.map((item) => (
          <a className="text-center font-normal leading-[21.78px] cursor-pointer last:w-[8rem] last:h-[3rem] rounded-3xl last:py-[13px] last:bg-gradient-to-b from-[#06286E] to-[#164EC0] last:text-white  ">{item}</a>
        ))}
      </div>
    </div>
  );
};

export default Nav;
