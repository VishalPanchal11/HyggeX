import FAQ from "./Sections/FAQ";
import Flashcard from "./Sections/Flashcard";
import Hero from "./Sections/Hero";
import Nav from "./Sections/Nav";
import Path from "./Sections/Path";

export default function App() {
  return (
    <main className="mx-[6.5rem] mb-[19rem]  ">
      <Nav />
      <Path />
      <Hero />
      <Flashcard/>
      <FAQ/>
    </main>
  );
}
