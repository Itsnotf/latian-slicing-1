"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "../../../public/assets/logo.svg";
import facebook from "../../../public/assets/facebook.svg";
import twiter from "../../../public/assets/twiter.svg";
import instagram from "../../../public/assets/instagram.svg";
import arrowDown from "../../../public/assets/arrowDown.svg";

export default function Footers() {
  const [isCompanyDropdownVisible, setIsCompanyDropdownVisible] =
    useState(false);
  const [isContactDropdownVisible, setIsContactDropdownVisible] =
    useState(false);
  const [isMeetUsDropdownVisible, setIsMeetUsDropdownVisible] = useState(false);

  const toggleCompanyDropdown = () => {
    setIsCompanyDropdownVisible((prev) => !prev);
  };

  const toggleContactDropdown = () => {
    setIsContactDropdownVisible((prev) => !prev);
  };

  const toggleMeetUsDropdown = () => {
    setIsMeetUsDropdownVisible((prev) => !prev);
  };

  return (
    <section className="grid grid-cols-4 lg:grid-cols-12  my-8 md:mx-16 lg:mx-32 mx-4 gap-16">
      <div className="col-span-4 lg:col-span-7 flex flex-col gap-8">
        <div className="flex gap-2">
          <Image src={logo} alt="Logo Website" />
          <h1 className="text-2xl font-bold">Travlog</h1>
        </div>
        <p className="text-[16px] lg:text-[23px] font-normal text-gray-400 lg:mb-16">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC.
        </p>
        <div className="flex gap-8">
          <Image src={facebook} alt="logo" />
          <Image src={twiter} alt="logo" />
          <Image src={instagram} alt="logo" />
        </div>
      </div>

      <div className="col-span-4 lg:col-span-5 flex flex-col sm:flex-row sm:justify-between gap-8">
        <div>
          <div className="flex items-center justify-between mb-8">
            <h1 className="font-bold text-[23px]">Company</h1>
            <button className="sm:hidden" onClick={toggleCompanyDropdown}>
              <Image
                src={arrowDown}
                alt="drop Down"
                className={`transform ${
                  isCompanyDropdownVisible ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
          <div className="hidden sm:block text-[20px] text-gray-400">
            <ul className="flex flex-col gap-8">
              <li>About</li>
              <li>Career</li>
              <li>Mobile</li>
            </ul>
          </div>
          <div
            className={`text-[18px] text-gray-400 ${
              isCompanyDropdownVisible ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col gap-8">
              <li>About</li>
              <li>Career</li>
              <li>Mobile</li>
            </ul>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-8">
            <h1 className="font-bold text-[23px]">Contact Us</h1>
            <button className="sm:hidden" onClick={toggleContactDropdown}>
              <Image
                src={arrowDown}
                alt="drop Down"
                className={`transform ${
                  isContactDropdownVisible ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
          <div className="hidden sm:block text-[20px] text-gray-400">
            <ul className="flex flex-col gap-8">
              <li>Why Travlog?</li>
              <li>Partner with us</li>
              <li>FAQ’s</li>
              <li>Blog</li>
            </ul>
          </div>
          <div
            className={`text-[18px] text-gray-400 ${
              isContactDropdownVisible ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col gap-8">
              <li>Why Travlog?</li>
              <li>Partner with us</li>
              <li>FAQ’s</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-8">
            <h1 className="font-bold text-[23px]">Meet Us</h1>
            <button className="sm:hidden" onClick={toggleMeetUsDropdown}>
              <Image
                src={arrowDown}
                alt="drop Down"
                className={`transform ${
                  isMeetUsDropdownVisible ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
          <div className="hidden sm:block text-[20px] text-gray-400">
            <ul className="flex flex-col gap-8">
              <li>+00 92 1234 56789</li>
              <li>info@travlog.com</li>
              <li>
                205. R Street, New York <br />
                BD23200
              </li>
            </ul>
          </div>
          <div
            className={`text-[18px] text-gray-400 ${
              isMeetUsDropdownVisible ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col gap-8">
              <li>+00 92 1234 56789</li>
              <li>info@travlog.com</li>
              <li>
                205. R Street, New York <br />
                BD23200
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
