import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Vision } from "@/components/sections/Vision";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { WhatWeOffer } from "@/components/sections/WhatWeOffer";
import { Services } from "@/components/sections/Services";
import { StrategicFocus } from "@/components/sections/StrategicFocus";
import { KeyOutcomes } from "@/components/sections/KeyOutcomes";
import { GetInTouch } from "@/components/sections/GetInTouch";
import { Footer } from "@/components/sections/Footer";
// Wraps a section with a gradient fade at the bottom edge for smooth section blending
function Fade({ children }) {
  return <div className="section-fade">{children}</div>;
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Fade><Hero /></Fade>
        <Fade><About /></Fade>
        <Fade><Vision /></Fade>
        <Fade><WhatWeDo /></Fade>
        <Fade><WhatWeOffer /></Fade>
        <Fade><Services /></Fade>
        <Fade><StrategicFocus /></Fade>
        <Fade>
          <div id="outcomes"><KeyOutcomes /></div>
        </Fade>
        <GetInTouch />
      </main>
      <Footer />
    </div>
  );
}
