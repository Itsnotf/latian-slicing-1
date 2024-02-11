import Image from "next/image";
import beach from "../../../public/assets/beach.svg";
import fish from "../../../public/assets/fish.svg";
import mountain from "../../../public/assets/mountain.svg";
import star from "../../../public/assets/star.svg";
import arrowRight from "../../../public/assets/arrowRight.svg";
import arrowLeft from "../../../public/assets/arrowLeft.svg";

export default function Destionation() {
  interface cardUtil {
    img: any;
    title: string;
    location: string;
    rate: string;
  }

  const cardUtil = [
    {
      img: beach,
      price: "$550.16",
      title: "Paradise Beach, Bantayan Island",
      location: "Rome, Italy",
      rate: "4.8",
    },
    {
      img: fish,
      price: "$20.99",
      title: "Ocean with full of Colors",
      location: "Maldives",
      rate: "4.5",
    },
    {
      img: mountain,
      price: "$150.99",
      title: "Mountain View, Above the cloud",
      location: "United Arab Emeries ",
      rate: "5",
    },
  ];
  return (
    <section>
      <div className="mb-8 flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <div className="my-8 text-center lg:text-start font-bold">
          <h1 className="mb-4 text-[16px] text-pink-500">TOP DESTINATION</h1>
          <p className="text-[32px]">Explore top destination</p>
        </div>

        <div className="flex justify-between sm:justify-center gap-8 ">
          <button className="border border-[#eeeeee] h-16 w-16 rounded-full flex items-center justify-center text-white font-bold">
            <Image src={arrowLeft} alt="button" />
          </button>
          <button className="bg-ungu h-16 w-16 rounded-full flex items-center justify-center text-white font-bold">
            <Image src={arrowRight} alt="button" />
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between">
        {cardUtil.map((item, index) => (
          <div
            key={index}
            className="mx-auto sm:mx-0 h-[575px] w-[320px] sm:w-[278px] lg:w-[373px]  border border-[#eeeeee] rounded-[32px] mb-8 "
          >
            <div className="h-1/2 lg:h-[60%]   ">
              <Image
                src={item.img}
                alt="beach"
                className="object-cover w-full h-full rounded-t-[32px]"
              />
            </div>
            <div className="font-bold text-[23px] m-8">
              <div className="flex flex-col lg:flex-row-reverse">
                <h1 className="text-pink-500 mb-2">{item.price}</h1>
                <h2 className="mb-4">{item.title}</h2>
              </div>
              <p className="font-light text-gray-400 text-[16px] ">
                {item.location}
              </p>
            </div>
            <div className="flex gap-2  text-[23px] mb-8 mx-8 font-bold text-orange-500">
              <h1>{item.rate}</h1> <Image src={star} alt="rate" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
