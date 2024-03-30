import React from "react";
import Overlay from '../components/Overlay'
import Left from "../components/Left";
import Right from "../components/Right";
import Hero from "../components/Hero";
import About from "../components/About";
import Resume from "../components/Resume";
import Portfolio from "./Portfolio";
import Common from "../components/Common";

export default function Home() {
  return (
    <>
     <Overlay/>
     <Left/>
     <Right/>
     <main id="main" class="main-2">
     <Hero/>
     <About/>
     <Resume/>
     <Portfolio/>
     </main>
     <Common/>
    </>
  );
}
