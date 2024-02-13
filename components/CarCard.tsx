import { CiHeart } from "react-icons/ci";
import Image from "next/image";
import { CiUser } from "react-icons/ci";
import { cars } from "@/types/cars";

const CarCard = ({ model, price, release }: cars) => {
  return (
    <div className="bg-white py-4  px-4">
      <div>
        <div className="flex justify-between">
          <div>
            <h3 className="leading-8">{model}</h3>
            <p className="text-sm text-secondary">{release}</p>
          </div>
          <div>
            <CiHeart size={20} className="mt-2" />
          </div>
        </div>
        <div className="pl-4 pr-12">
          <Image
            src="/assets/images/car.svg"
            alt=""
            width={233}
            height={105}
            className="ml-4"
          />
        </div>
        <div className="pt-4 flex justify-between">
          <div className="flex items-center">
            <div className="flex items-center mr-4">
              <CiUser className="text-primary mr-1" size={24} />
              <span className="text-secondary">4</span>
            </div>
            <div className="flex items-center">
              <Image
                src="/assets/icons/exchange.svg"
                alt=""
                width={20}
                height={20}
              />
              <span className="text-secondary ml-2 text-sm">Manual</span>
            </div>
          </div>
          <div>
            <p>
              ${price}
              <span className="text-secondary">/d</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CarCard;
