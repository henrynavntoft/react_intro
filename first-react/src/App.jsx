import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navigation } from "./Navigation";
import { Hero } from "./Hero";
import { Partners } from "./Partners";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <Partners />
    </>
  );
}

export default App;
