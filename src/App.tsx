import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Services from "./pages/Services";

function App() {
  return (
    <>
      <div className="flex w-full place-content-center">
        <div className="w-full">
          {/* Header */}
          <Navbar />
          {/* Content section here */}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/about" element={<AboutUs />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>

          {/* Footer Section */}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
