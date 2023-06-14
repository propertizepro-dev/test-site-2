import Heading from "./components/ui/Heading";
import HeroSection from "./components/ui/HeroSection";
import Navbar from "./components/ui/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center w-full">
        <HeroSection />
        <div className="max-w-6xl flex flex-col w-full py-6">
          <Heading>Buy and Sell with Confidence</Heading>
          <p></p>
        </div>
      </main>
    </>
  );
}
