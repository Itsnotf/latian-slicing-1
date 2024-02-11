import Image from "next/image";
import destination from "../../../public/assets/destination.svg";
import cloudy from "../../../public/assets/cloudy.svg";
import bookings from "../../../public/assets/bookings.svg";

export default function Services() {
  const serviceMenu = [
    {
      img: destination,
      header: "BestTour Guide",
      title: "Our top value catagories for you",
    },
    {
      img: bookings,
      header: "Weather Forecast",
      title: "What looked like a small patch of purple grass, above five feet.",
    },
    {
      img: cloudy,
      header: "Easy Booking",
      title: "Square, was moving across the sand in their direction.",
    },
  ];

  return (
    <section className="flex flex-col lg:flex-row">
      <div className="lg:flex lg:flex-col lg:justify-center  font-bold lg:text-start text-center gap-y-4 mb-8 overflow-hidden">
        <h1 className="text-[16px] sm:text-[23px] text-pink-500">
          S E R V I C E S
        </h1>
        <p className="text-[34px] sm:text-[40px] lg:text-[45px] ">
          Our top value catagories for you
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        {serviceMenu.map((item, index) => (
          <div
            key={index}
            className="border border-[#eeeeee] hover:shadow-card-shadow hover:border-[#ffffff] transition-all ease-in-out hover:ease-in-out duration-200 hover:duration-200 rounded-[32px] mb-8"
          >
            <div className="m-8 sm:m-16">
              <Image src={item.img} alt="Services Logo" className="mx-auto" />
            </div>
            <div>
              <h1 className="mx-8 sm:mx-16  text-center text-[24px] sm:text-[28px] font-bold">
                {item.header}
              </h1>
              <p className="mx-8 sm:mx-16 text-center text-[18px] font-normal text-gray-400 my-8 sm:my-16 ">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
