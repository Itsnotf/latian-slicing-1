import Image from "next/image";
import profile from "../../../public/assets/profile.svg";
import starRate from "../../../public/assets/starRate.svg";
import arrowRight from "../../../public/assets/arrowRight.svg";
import arrowLeft from "../../../public/assets/arrowLeft.svg";
import Vector from "../../../public/assets/Vector.svg";

export default function Testimoni() {
  return (
    <section className="relative grid grid-cols-12 my-8">
      <div className="col-span-12 font-bold text-center">
        <div>
          <h1 className="text-pink-500">T E S T I M O N I A L S</h1>
          <p className="text-[32px]">Trust our clients</p>
        </div>

        <div className="my-16">
          <Image src={profile} alt="Profile Testimoni" className="mx-auto" />
        </div>
        <div className="lg:absolute lg:flex hidden -z-50 opacity-25 -top-56">
          <Image src={Vector} alt="vector" />
        </div>
        <div className="mb-8">
          <h1 className="text-[28px]">
            <span className="text-orange-500">Mark Smith</span> / Travel
            Enthusiast
          </h1>
        </div>
        <div className=" flex gap-4 justify-center ">
          <Image src={starRate} alt="rate" />
          <Image src={starRate} alt="rate" />
          <Image src={starRate} alt="rate" />
          <Image src={starRate} alt="rate" />
          <Image src={starRate} alt="rate" />
        </div>
        <div className="my-16 font-normal text-gray-400 ">
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
        </div>
        <div className=" flex justify-center gap-4 mb-16">
          <div className="w-5 h-5 bg-gray-400 rounded-full"> </div>
          <div className="w-5 h-5 bg-pink-500 rounded-full"> </div>
          <div className="w-5 h-5 bg-gray-400 rounded-full"> </div>
        </div>
        <div className=" sm:absolute top-1/2 flex justify-between sm:gap-[460px] md:gap-[620px] lg:gap-[900px]  sm:translate-x-[50%] sm:right-1/2 gap-8 ">
          <button className="border bg-white border-[#eeeeee] md:h-24 md:w-24 h-16 w-16 rounded-full flex items-center justify-center text-white font-bold">
            <Image src={arrowLeft} alt="button" />
          </button>
          <button className="bg-ungu h-16 w-16 md:h-24 md:w-24 rounded-full flex items-center justify-center text-white font-bold">
            <Image src={arrowRight} alt="button" />
          </button>
        </div>
      </div>
    </section>
  );
}
