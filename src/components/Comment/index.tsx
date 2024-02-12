"use client";
import Image from "next/image";
import message from "../../../public/assets/message.svg";
import { useState } from "react";

export default function Comment() {
  const [isInputActive, setIsInputActive] = useState(false);

  const handleInputFocus = () => {
    setIsInputActive(true);
  };

  const handleInputBlur = () => {
    setIsInputActive(false);
  };

  return (
    <section className="my-16">
      <div className="px-8 py-16 bg-yellow-50 rounded-[32px]">
        <div className="font-bold text-center mb-16">
          <h1 className="text-[16px] text-pink-500 mb-8 tracking-widest">
            SUBSCRIBES TO OUR NEWSLATTERS
          </h1>
          <p className="text-[32px]">
            Prepare yourself & let’s explore the beauty of the world
          </p>
        </div>

        <div className=" flex justify-center flex-col gap-8 sm:flex-row">
          <div className="relative  ">
            <div
              className={`absolute flex gap-5 justify-center items-center top-1/2 -translate-y-[50%] left-10  ${
                isInputActive ? "hidden" : "block"
              }`}
            >
              <Image src={message} alt="logo" className="" />
              <label className="text-[18px] sm:text-[23px] font-bold text-gray-600">
                Your Email
              </label>
            </div>
            <input
              type="text"
              className="w-full lg:w-[623px] px-16 sm:py-[39px] py-6 rounded-[16px]"
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          </div>

          <div>
            <button className="w-full  px-16 sm:py-8 py-6 bg-ungu rounded-[16px]">
              <p className="text-[18px] sm:text-[23px] font-bold text-white">
                Subscribe
              </p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
