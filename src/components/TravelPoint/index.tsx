import travelPoint from "../../../public/assets/travelpoint.svg";
import Image from "next/image";

export default function TravelPoint() {
  interface travelPack {
    utility: string;
    title: string;
  }

  const travelPack = [
    {
      utility: "500+",
      title: "Holiday Package",
    },
    {
      utility: "100",
      title: "Luxury Hotel",
    },
    {
      utility: "7",
      title: "Premium Airlines",
    },
    {
      utility: "2k+",
      title: "Happy Customer",
    },
  ];
  return (
    <div className="grid grid-cols-12 sm:grid-cols-8 lg:grid-cols-12">
      <div className="col-span-12 lg:col-span-7 mb-16 mt-8  ">
        <Image
          src={travelPoint}
          alt="travel Point"
          className="sm:h-[700px] w-auto"
        />
      </div>

      <div className="col-span-12 lg:col-span-5 lg:my-auto ">
        <div className="text-center text-[16px] font-bold mb-8">
          <h1 className="text-pink-500 mb-4">T R A V E L P O I N T </h1>
          <h2 className="text-[32px] mb-8">
            We helping you find your dream location
          </h2>
          <p className="font-light text-slate-400">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
        </div>

        <div className="sm:grid grid-cols-8">
          {travelPack.map((item, index) => (
            <div
              key={index}
              className="sm:w-[320px] lg:w-[230px] sm:col-span-4 border border-[#EEEEEE] rounded-[32px] mx-auto mb-4"
            >
              <div className="p-8 text-center gap-4">
                <h1 className="font-bold text-[35px] text-orange-500">
                  {item.utility}
                </h1>
                <p className="text-[18px]">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
