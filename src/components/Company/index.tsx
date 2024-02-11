import airbnb from "../../../public/assets/airbnb.svg";
import booking from "../../../public/assets/booking.svg";
import expedia from "../../../public/assets/expedia.svg";
import orbitz from "../../../public/assets/orbitz.svg";
import tripadvisor from "../../../public/assets/tripadvisor.svg";
import Image from "next/image";

export default function Company() {
  interface CompanyMenu {
    img: any;
  }

  const companyMenu: CompanyMenu[] = [
    { img: tripadvisor },
    { img: expedia },
    { img: booking },
    { img: airbnb },
    { img: orbitz },
  ];

  return (
    <section className="grid grid-cols-12 mb-8 border-y-2  ">
      <div className="col-span-12 flex flex-wrap py-8 sm:py-16  lg:gap-0 gap-x-[27px] gap-y-8 justify-center lg:justify-between  ">
        {companyMenu.map((item, index) => (
          <Image
            key={index}
            className="h-5 w-auto sm:h-8"
            src={item.img}
            alt="company"
          />
        ))}
      </div>
    </section>
  );
}
