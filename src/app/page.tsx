import { ScrollytellingSection } from "@/components/ScrollytellingSection";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Navbar } from "@/components/Navbar";
import { IslamicQuote } from "@/components/IslamicQuote";

import { Preloader } from "@/components/Preloader";

export default function Home() {
  return (
    <main className="w-full bg-[#121212]">
      <Preloader />
      <Navbar />

      {/* 
        Scrollable Canvas Section 
        This is our 500vh Scrollytelling sticky header
      */}
      <ScrollytellingSection totalFrames={75} />

      {/* 
        Below the fold content 
      */}
      <div id="work">
        <Projects />
      </div>

      {/* Daily Motivational Quote */}
      <IslamicQuote />

      {/* 
        Footer / Contact
      */}
      <div id="contact">
        <Contact />
      </div>
    </main>
  );
}
