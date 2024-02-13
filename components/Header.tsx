import { IoNotificationsOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div className="bg-white h-16 px-4 flex items-center  justify-between py-10">
      <div className="relative">
        <input
          type="text"
          placeholder="Search or type"
          className="text-sm focus:outline-none active:outline-none  bg-[#F5F4F6] w-[24rem] h-10 pl-11 pr-4 rounded-xl"
        />
        <CiSearch className="absolute left-3 top-2 text-gray-500" size={20} />
      </div>
      <div className="flex items-center gap-2 mr-2">
        <IoNotificationsOutline size={20} />

        <div className="relative">
          <div>
            <button className="ml-2 bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
              <div
                className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
                style={{
                  backgroundImage: 'url("/assets/images/profile.svg")',
                }}
              ></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
