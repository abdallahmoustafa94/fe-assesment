import Layout from "@/components/Layout";
import CarCard from "@/components/CarCard";
import { useFetchDataQuery } from "@/hooks/useApi";
import Image from "next/image";
import { cars } from "@/types/cars";
const Cars = () => {
  const { data, error, isLoading } = useFetchDataQuery(
    "9629069e-4138-443b-8556-57557938f7ad"
  );

  return (
    <Layout>
      <h2 className="py-4 text-2xl">Booking</h2>
      <div className="flex justify-between">
        <div className="flex  py-4">
          <select className="rounded-xl  focus:outline-none p-2 bg-white pr-8 text-sm px-2 mr-4">
            <option value="option1">New</option>
            <option value="option2">Used</option>
          </select>
          <select className="rounded-xl  focus:outline-none p-2 bg-white pr-8 text-sm px-2">
            <option value="option1">Toyota</option>
            <option value="option2">Porche</option>
          </select>
        </div>
        <div className="flex items-center">
          <Image
            src="/assets/icons/grid-icon.svg"
            width={44}
            height={44}
            alt=""
            className="mr-2"
          />
          <Image
            src="/assets/icons/filter-icon.svg"
            width={30}
            height={30}
            alt=""
          />
        </div>
      </div>
      -
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.map((car: cars) => (
          <CarCard
            key={car.id}
            model={car.car_model}
            price={car.price}
            release={car.car_model_year}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Cars;
