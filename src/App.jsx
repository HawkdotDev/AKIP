import Blogs from "./routes/Blogs";
import Services from "./routes/Services";
import Media from "./routes/Media";
import Careers from "./routes/Careers";
import ContactUs from "./routes/ContactUs";
import About from "./routes/About";
import Home from "./routes/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Oap from "./routes/Services/OAP";
import Opex from "./routes/Services/OPEX";
import Iot from "./routes/Services/IOT";
import Csp from "./routes/Services/Csp";
import BESS from "./routes/Services/BESS";
import BlogPage from "./routes/BlogPage";
import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#E6E6E6]">
      <div className="max-w-[1920px] container">
        <Navbar />

        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Blogs" element={<Blogs />} />
            <Route path="/Blogs/blog/:slug" element={<BlogPage />} />

            <Route path="/Services" element={<Services />} />
            <Route path="/Services/Captive-Solar-Project" element={<Csp />} />
            <Route path="/Services/Open-Access-Project" element={<Oap />} />
            <Route path="/Services/Opex-Solution" element={<Opex />} />
            <Route path="/Services/BESS-System" element={<BESS />} />
            <Route path="/Services/IOT" element={<Iot />} />

            <Route path="/About" element={<About />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/Media" element={<Media />} />
            <Route path="/Careers" element={<Careers />} />
          </Routes>
        </Router>

        <Footer />
      </div>
    </div>
  );
}

export default App;
