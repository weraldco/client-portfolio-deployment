import { BiPhone } from "react-icons/bi";
import { BsTwitterX, BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { RiInstagramFill } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";
import WrapperDiv from "./WrapperDiv";

const FooterNav = () => {
  return (
    <>
      <WrapperDiv className="footer-section">
        <div className="grid gap-5 p-5">
          <nav className="grid grid-flow-col items-center">
            <div>
              <img src="/img/logo4-white.png" alt="" className="w-[250px]" />
            </div>
            <div>
              <ul className="grid grid-flow-col text-xs text-gray-300 lg:text-base">
                <li className="rounded-full px-4 py-2 transition-all hover:font-bold">
                  <Link to="/">Home</Link>
                </li>
                <li className="rounded-full px-4 py-2 transition-all hover:font-bold">
                  <Link to="/services">Services</Link>
                </li>
                <li className="rounded-full px-4 py-2 transition-all hover:font-bold">
                  <Link to="/about">About us</Link>
                </li>
              </ul>
            </div>
          </nav>
          <nav className="grid place-items-center gap-5 border-t-2 border-t-gray-600 px-3 py-4 lg:grid-cols-2 lg:place-items-start">
            <div className="flex gap-3 text-base text-gray-200">
              <Link
                to="/"
                className="rounded-full bg-gray-800 p-2 transition-all hover:bg-yellow-400 hover:text-black"
              >
                <FaFacebookF />
              </Link>
              <Link
                to="/"
                className="rounded-full bg-gray-800 p-2 transition-all hover:bg-yellow-400 hover:text-black"
              >
                <BsTwitterX />
              </Link>
              <Link
                to="/"
                className="rounded-full bg-gray-800 p-2 transition-all hover:bg-yellow-400 hover:text-black"
              >
                <RiInstagramFill />
              </Link>
              <Link
                to="/"
                className="rounded-full bg-gray-800 p-2 hover:bg-yellow-400 hover:text-black"
              >
                <BsYoutube />
              </Link>
            </div>
            <div className="grid gap-5 text-center text-[0.8em] text-gray-200 lg:grid-flow-col lg:place-content-end">
              <div className="flex items-center justify-center gap-1">
                <SlLocationPin size={20} className="text-base text-[#00715D]" />
                243 Clark Avenue - Bagumbayan Quezon City, PH 1105
              </div>
              <div className="flex items-center justify-center gap-1">
                <BiPhone size={20} className="text-sm text-[#00715D]" />{" "}
                (02)995995
              </div>
              <div className="flex items-center justify-center gap-1">
                <FiClock size={20} className="text-sm text-[#00715D]" /> 9:00 AM
                - 6:00 PM
              </div>
            </div>
          </nav>
        </div>
      </WrapperDiv>
    </>
  );
};

export default FooterNav;
