import Faqna from "../Components/Faqna";
const FAQ = () => {
  return (
    <div className="w-[53rem] max-lg:w-[80%] max-md:w-full">
      <h1 className="mt-[134px] mb-[48px] leading-[58.09px] font-inter text-[48px] font-bold bg-gradient-to-b from-[#06286E] to-[#164EC0] text-transparent bg-clip-text">
        FAQ
      </h1>
      <div className="flex flex-col gap-8">
      <Faqna question="Can education flashcards be used for all age groups?" answer="Yes, education flashcards can be adapted for various age groups by adjusting content complexity and engagement techniques."/>
      <Faqna question="How do education flashcards work?" answer="Education flashcards work by presenting information in a concise format, aiding memory retention through repetition and active recall."/>
      <Faqna question="Can education flashcards be used for test preparation?" answer="Absolutely, education flashcards are effective tools for test preparation, facilitating review and reinforcement of key concepts."/>
      </div>
    </div>
  );
};

export default FAQ;
