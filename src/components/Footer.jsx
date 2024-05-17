import React from "react";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-[100px] bg-[url('/bg_footer.png')] bg-cover bg-no-repeat 2xl:relative">
      <div className="left-[50px] top-[80px] hidden 2xl:absolute 2xl:block">
        <img src="/footer_element_1.svg" alt="footer-element-1" />
      </div>
      <div className="bottom-[70px] right-[100px] hidden 2xl:absolute 2xl:block">
        <img src="/footer_element_2.svg" alt="footer-element-2" />
      </div>
      <div className="max-container padding-container grid gap-8 px-4 pt-12 text-gray-300 lg:grid-cols-3">
        <div>
          <h1 className="w-full text-sm font-bold text-black">About Trippy</h1>
          <p className="py-4 text-sm text-[#999999]">
            Trippy is one of the most popular Travel agency for those who want
            to explore egypt and try to make adventure as well as we can provide
            beautiful destination around the world and make you trip
          </p>
          <div className="md:[75%] my-6 flex gap-4">
            <FaTwitterSquare size={30} color="#00b9ff" />
            <FaInstagram size={30} color="black" />
            <FaFacebookSquare size={30} color="#3b5998" />
          </div>
        </div>
        <div className="ml-5 flex flex-col justify-between gap-10 sm:flex-row lg:col-span-2">
          <div>
            <h6 className="text-sm font-bold text-black">Information</h6>
            <ul>
              <li className="py-2 text-sm text-[#999999]">Destinations</li>
              <li className="py-2 text-sm text-[#999999]">About</li>
              <li className="py-2 text-sm text-[#999999]">Contacts</li>
            </ul>
          </div>
          <div>
            <h6 className="text-sm font-bold text-black">Support</h6>
            <ul>
              <li className="py-2 text-sm text-[#999999]">Login</li>
              <li className="py-2 text-sm text-[#999999]">Signup</li>
              <li className="py-2 text-sm text-[#999999]">Licenses</li>
            </ul>
          </div>
          <div>
            <h6 className="text-sm font-bold text-black">Contact</h6>
            <ul>
              <span></span>
              <li className="py-2 text-sm text-[#999999]">info@trippy</li>
              <span></span>
              <li className="py-2 text-sm text-[#999999]">+1 222 212 42222</li>
              <span></span>
              <li className="py-2 text-sm text-[#999999]">
                43 Raymouth Rd. Baltemoer, London 3910
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
