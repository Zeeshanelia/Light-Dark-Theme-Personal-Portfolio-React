import { Nav } from "./Component/Nav";
import { Hero } from "./Component/Hero";
import { Route, Routes } from "react-router";
import 'remixicon/fonts/remixicon.css'
export default function App() {



  return (
    <div className="min-h-screen bg-gradient-to-r from-zinc-700 to-purple-800 flex flex-col">



      <Nav />

      <div className="flex-1 mt-16">
        <Hero />
      </div>



      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<About />} /> */}
        {/* <Route path="/services" element={<Services />} /> */}
      </Routes>
    </div>


  );
};




