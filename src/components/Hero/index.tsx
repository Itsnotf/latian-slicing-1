import Image from "next/image";
import HeroImage from "../../../public/assets/hero.svg";
import Work from "../../../public/assets/work.svg";
import play from "../../../public/assets/play.svg";

export default function Hero() {
  return (
    <div className="grid grid-cols-12 py-8">
      <div className=" col-span-12 lg:my-16 lg:col-span-4 order-2 sm:mb-16  lg:order-1">
        <button className="flex lg:mx-0 justify-center items-center gap-2 py-4 px-8 text-[14px] font-bold text-pink-500 shadow-white-shadow rounded-full mx-auto">
          Explore the world!
          <Image src={Work} alt="work icon" />
        </button>

        <div className="lg:text-start text-center mb-8">
          <h1 className="font-bold text-[40px] sm:text-[56px] lg:text-[69px] leading-tight mt-4 mb-6 sm:my-11 ">
            Travel <span className="text-pink-500">top destination</span> of the
            world
          </h1>
          <p className="text-[16px] sm:text-[18px] font-normal text-gray-500 sm:mb-11">
            We always make our customer happy by providing as many choices as
            possible
          </p>
        </div>

        <div className="flex flex-col sm:flex-row lg:justify-start justify-center sm:items-center gap-6 font-bold text-[14px] ">
          <button className=" px-8 py-6 sm:py-4 rounded-full shadow-black-shadow bg-ungu text-white">
            Get Started
          </button>
          <button className="z-10 flex gap-2 py-6 sm:py-4 px-8  border border-[#eeeeee] rounded-full justify-center items-center">
            <Image src={play} alt="play" />
            Watch Demo
          </button>
        </div>
      </div>

      <div className="col-span-12 lg:py-0  lg:my-0   lg:col-span-8 my-8  order-1  lg:order-2">
        <Image src={HeroImage} alt="Hero Image" />
      </div>
    </div>
  );
}
