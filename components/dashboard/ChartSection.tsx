import React from "react";
import Chart from "../Chart";
import Image from "next/image";
import { energyData } from "@/constants/energyData";
import { breakFluidData } from "@/constants/breakFluidData";
import { rangeData } from "@/constants/rangeData";
import { tireWearData } from "@/constants/tireWearData";

const ChartSection = () => {
  const charts = [energyData, rangeData, breakFluidData, tireWearData];
  return (
    <div className="lg:flex justify-between">
      {charts.map((chart, index) => (
        <div
          className={`${
            index === 0 ? "bg-primary" : "bg-white"
          }  w-[250px]  py-4 rounded-2xl lg:mt-0 mt-4 mx-auto lg:mx-0`}
        >
          <Image
            src={chart.icon}
            height={38}
            width={38}
            alt=""
            className="block mx-auto"
          />
          <p
            className={`${
              index === 0 ? "text-white" : "text-black"
            } text-center text-2xl mt-4`}
          >
            {chart.label}
          </p>
          <Chart options={chart.options} series={chart.series} />
        </div>
      ))}
    </div>
  );
};

export default ChartSection;
