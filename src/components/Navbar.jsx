import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center m-8 border border-[#197686] bg-[rgba(5, 37, 44, 0.40)] rounded-[24px] md:w-[1200px] py-[12px] px-[16px]">
      <div className="flex gap-[10px] items-center justify-center px-[8px] py-[6px]">
        <Image src="thumb.svg" alt="logo" width={30} height={40} />
        <Image src="ticz.svg" alt="ticz" width={30} height={30} />
      </div>
      <div className="hidden md:flex items-center justify-between gap-5 ">
        <Link
          href="/event"
          className="text-white font-jeju text-[18px] p-[10px]"
        >
          Event{" "}
        </Link>
        <Link
          href="/my-ticket"
          className="text-[#B3B3B3] font-jeju text-[18px] p-[10px]"
        >
          My Ticket{" "}
        </Link>
        <Link
          href="/about-event"
          className="text-[#B3B3B3] font-jeju text-[18px] p-[10px]"
        >
          About Project{" "}
        </Link>
      </div>
      <div>
        <button className="flex px-[24px] py-[16px] justify-center items-center gap-[8px] bg-white rounded-[12px] border border-[rgba(213, 234, 0, 0.10)] ">
          MY TICKETS
          <Image src="Line 5.svg" alt="-->" width={30} height={30} />{" "}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
