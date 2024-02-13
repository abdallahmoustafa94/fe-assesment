import Image from "next/image";

const Offers = () => {
  return (
    <div className="lg:flex justify-between items-center lg:gap-8 mx-auto lg:mx-0 ">
      <div className="flex justify-between items-center py-4 flex-1 bg-[#FFE0BA] rounded px-6 h-[222px] rounded-lg">
        <div className="flex flex-col">
          <h3 className="text-[#0F2837] text-3xl font-light">
            Apply for a car loan !
          </h3>
          <p className="text-[#0F2837] text-lg py-2">
            This is a sample of a generated text
          </p>
          <button className="bg-[#0F2837] py-2  text-white w-max py-2 px-4">
            Discover More
          </button>
        </div>
        <div>
          <Image
            src="/assets/images/designer-desk.svg"
            width={238}
            height={238}
            alt=""
          />
        </div>
      </div>
      <div className="bg-[#0F2837] w-[220px] py-8 mx-auto lg:mx-0 mt-4 lg:mt-0">
        <div className="flex  items-start justify-center  ">
          <div className="flex flex-col justify-center items-center text-white">
            <p className="text-lg leading-6">
              You <br /> have <br /> earned
            </p>
          </div>
          <div>
            <Image
              src="/assets/images/earn.svg"
              width={110}
              height={110}
              alt=""
            />
          </div>
        </div>
        <div className="transform translate-x-[30px] -mt-6">
          <p className="text-2xl leading-6 text-[#FF9619]">
            20 <br />
            <span className="text-white">Badges</span>
          </p>
          <p className="text-[12px]  text-[#FF9619]">
            Hooray! Way to go Mohammed!
          </p>
        </div>
      </div>
      <div className="bg-[#6E1946] w-[220px] py-8 mx-auto lg:mx-0 mt-4 lg:mt-0">
        <div className="flex  items-start justify-center  ">
          <div className="flex flex-col justify-center items-center text-white">
            <p className="text-lg leading-6">
              You <br /> have <br /> earned
            </p>
          </div>
          <div>
            <Image
              src="/assets/images/earn-points.svg"
              width={110}
              height={110}
              alt=""
            />
          </div>
        </div>
        <div className="transform translate-x-[30px] -mt-6">
          <p className="text-2xl leading-6 text-[#FF9619]">
            1500 <br />
            <span className="text-white">Points</span>
          </p>
          <p className="text-[12px] text-[#FF9619]">
            Hooray! Way to go Mohammed!
          </p>
        </div>
      </div>
    </div>
  );
};
export default Offers;
