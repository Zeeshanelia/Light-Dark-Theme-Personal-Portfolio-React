import {Nav} from "./Component/Nav";
import {  Route, Routes } from "react-router-dom";
import 'remixicon/fonts/remixicon.css'
export default function App() {



  return (
    <div className="min-h-screen bg-gradient-to-r from-zinc-700 to-purple-800 flex items-center justify-center">


      <Nav />  {/* Nav is inside router context */}

      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about-me" element={<About />} /> */}
      </Routes>


    </div>
  );
};




