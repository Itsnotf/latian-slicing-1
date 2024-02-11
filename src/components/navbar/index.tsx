import Image from "next/image";
import hambuger from "../../../public/assets/hamburger.svg";
import logo from "../../../public/assets/logo.svg";
import Link from "next/link";

export default function Navbar() {
  interface NavMenuItem {
    name: string;
  }

  const navMenu: NavMenuItem[] = [
    {
      name: "Home",
    },
    {
      name: "Discover",
    },
    {
      name: "Special Deals",
    },
    {
      name: "Contact",
    },
  ];

  return (
    <div className="mx-4 py-[38px] flex justify-between items-center md:mx-16 lg:mx-32 font-bold   ">
      <div className="flex gap-2 justify-center items-center lg:order-1 sm:order-3">
        <Image src={logo} alt="Logo Website" />
        <h1 className="text-2xl">Travlog</h1>
      </div>

      <div className="hidden lg:flex lg:order-2 ">
        <ul className="gap-16 flex text-sm">
          {navMenu.map((item, index) => (
            <li key={index} className="text-[#19182580] hover:text-hitam ">
              <Link href={`#${item.name}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="text-sm hidden sm:flex lg:order-3 sm:order-1">
        <button className=" py-4 px-8">Log In</button>
        <button className="py-4 px-8 rounded-full bg-ungu text-white">
          Sign Up
        </button>
      </div>

      <div className="lg:hidden order-4">
        <Image src={hambuger} alt="Hamburger Menu" />
      </div>
    </div>
  );
}
