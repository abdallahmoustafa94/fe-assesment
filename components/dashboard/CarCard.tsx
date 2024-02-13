import React from "react";
import Image from "next/image";
import { CiSettings } from "react-icons/ci";
import { SlEnergy } from "react-icons/sl";
import { cars } from "@/types/cars";

const CarCard: React.FC<cars> = ({
  model,
  price,
  recommended,
  background,
  image,
}) => {
  console.log("Background Color:", background);

  return (
    <div style={{ backgroundColor: background }} className={` py-4  px-4 `}>
      <div>
        <div className="flex">
          <p className="leading-8">{`${recommended}% Recommend`} </p>
          <Image
            src="/assets/icons/recommended.svg"
            width={20}
            height={20}
            alt=""
          />
        </div>
        <div className="pl-4 pr-12">
          <Image
            src={image || ""}
            alt=""
            width={233}
            height={105}
            className="ml-4"
          />
        </div>
        <h3 className="font-semibold">{model}</h3>
        <div className="pt-4 flex justify-between">
          <div className="flex items-center">
            <div className="flex items-center mr-4">
              <Image
                src="/assets/icons/manual-gray.svg"
                alt=""
                width={20}
                height={20}
              />
              <span className="text-secondary ml-2 text-sm">132k</span>
            </div>
            <CiSettings size={20} className="text-secondary mr-2" />
            <SlEnergy size={20} className="text-secondary mr-2" />
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
