import Image from "next/image";
import Background from "../../../public/assets/BACKGROUND.svg";
import location from "../../../public/assets/location.svg";
import kalender from "../../../public/assets/kalender.svg";
import voucher from "../../../public/assets/voucher.svg";

export default function Features() {
  interface features {
    logo: any;
    head: string;
    title: string;
  }
  const features = [
    {
      logo: location,
      head: "We offer best services",
      title: "Lorem Ipsum is not simply random text",
    },
    {
      logo: kalender,
      head: "Schedule your trip",
      title: "It has roots in a piece of classical",
    },
    {
      logo: voucher,
      head: "Get discounted coupons",
      title: "Lorem Ipsum is not simply random text",
    },
  ];

  return (
    <section className="grid grid-cols-12 ">
      <div className="col-span-12 mt-8 mb-16 lg:col-span-6 lg:order-2">
        <Image
          src={Background}
          alt="Features"
          className="object-fill mx-auto lg:w-full"
        />
      </div>

      <div className="col-span-12 font-bold text-center lg:text-left lg:col-span-6 lg:order-1">
        <h1 className="text-pink-500 text-[16px]">K E Y F E A T U R E S</h1>
        <h2 className="text-[32px] mt-4 ">We offer best services</h2>
        <p className="text-[16px] font-normal text-gray-400 my-8">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC.
        </p>

        <div className="">
          {features.map((item, index) => (
            <div
              key={index}
              className="text-left transition-all duration-150 ease-in-out hover:ease-in-out  hover:transition-all hover:duration-700 hover:shadow-card-shadow  rounded-[32px]  m-8 sm:flex sm:items-center "
            >
              <div className="p-8 ">
                <Image src={item.logo} alt="logo" />
              </div>
              <div className="px-8  pb-8 sm:py-8">
                <h1 className="text-[23px]">{item.head}</h1>
                <p className="font-normal text-gray-400 text-[18px]">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
