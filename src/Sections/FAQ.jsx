import dropdown from "../assets/images/dropdown.svg";
const FAQ = () => {
  return (
    <div className="w-[53rem]">
      <h1 className="mt-[134px] mb-[48px] leading-[58.09px] font-inter text-[48px] font-bold bg-gradient-to-b from-[#06286E] to-[#164EC0] text-transparent bg-clip-text">
        FAQ
      </h1>
      <div className="flex flex-col gap-8">
        <div className="h-[58px] w-full rounded-[12px] bg-gradient-to-l p-[1px] from-[#082299] to-[#217EEC] ">
          <div className="flex items-center justify-between px-6 rounded-[11px] bg-white h-full w-full ">
            <h3 className="leading-[26p] text-base font-inter font-semibold text-[#28262C] ">
              Can education flashcards be used for all age groups?
            </h3>
            <button>
              <img src={dropdown} alt="show more" />
            </button>
          </div>
        </div>
        <div className="h-[58px] w-full rounded-[12px] bg-gradient-to-l p-[1px] from-[#082299] to-[#217EEC] ">
          <div className="flex items-center justify-between px-6 rounded-[11px] bg-white h-full w-full ">
            <h3 className="leading-[26p] text-base font-inter font-semibold text-[#28262C] ">
              How do education flashcards work?
            </h3>
            <button>
              <img src={dropdown} alt="show more" />
            </button>
          </div>
        </div>
        <div className="h-[58px] w-full rounded-[12px] bg-gradient-to-l p-[1px] from-[#082299] to-[#217EEC] ">
          <div className="flex items-center justify-between px-6 rounded-[11px] bg-white h-full w-full ">
            <h3 className="leading-[26p] text-base font-inter font-semibold text-[#28262C] ">
              Can education flashcards be used for test preparation?
            </h3>
            <button>
              <img src={dropdown} alt="show more" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
