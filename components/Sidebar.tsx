import Image from "next/image";
import Link from "next/link";
import { RxDashboard } from "react-icons/rx";
import { IoCarOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { BiLogOut } from "react-icons/bi";
import { useState } from "react";

const Sidebar = () => {
  return (
    <div className="bg-white w-60 p-3 flex flex-col">
      <div className="flex items-center gap-2 px-1 py-3">
        <Image src="/assets/images/logo.svg" alt="" height={90} width={90} />
      </div>
      <div className="py-8 flex flex-1 flex-col gap-3 pl-2">
        <div className="flex items-center gap-1">
          <RxDashboard className="text-secondary" />
          <Link href="/" className="text-secondary">
            Dashboard
          </Link>
        </div>
        <div className="flex items-center gap-1">
          <IoCarOutline className="text-secondary" />
          <Link href="/cars" className="text-secondary">
            Cars
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-6 pb-6 pl-2">
        <div className="flex items-center gap-1">
          <CiSettings className="text-secondary" />
          <Link href="#" className="text-secondary">
            Settings
          </Link>
        </div>
        <div className="flex items-center gap-1">
          <BiLogOut className="text-secondary" />
          <Link href="#" className="text-secondary">
            Log out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
