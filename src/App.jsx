import FAQ from "./Sections/FAQ";
import Flashcard from "./Sections/Flashcard";
import Hero from "./Sections/Hero";
import Nav from "./Sections/Nav";
import Path from "./Sections/Path";

export default function App() {
  return (
    <main className="px-[6.5rem] max-lg:px-12 max-md:px-6 min-w-[628px] pb-[19rem] max-lg:pb-[10rem] max-md:pb-[5rem]  ">
      <Nav />
      <Path />
      <Hero />
      <Flashcard />
      <FAQ />
    </main>
  );
}
