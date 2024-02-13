import dynamic from "next/dynamic";
import { Options } from "@/types/chart";
import { ApexOptions } from "apexcharts";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface ChartProps {
  options: Options;
  series: number[];
}
const Chart = ({ options, series }: ChartProps) => {
  return (
    <div>
      <div id="chart" className="mt-6">
        <ReactApexChart
          options={options as ApexOptions}
          series={series}
          type={"radialBar"}
          height="200"
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default Chart;
