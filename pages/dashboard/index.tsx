import Layout from "@/components/Layout";
import ChartSection from "@/components/dashboard/ChartSection";
import Offers from "@/components/dashboard/Offers";
import CarCard from "@/components/dashboard/CarCard";
import { cars } from "@/constants/dashboardCars";
const Dashboard = () => {
  return (
    <Layout>
      <ChartSection />
      <div className="my-8"></div>
      <Offers />
      <div className="my-8 lg:flex items-center justify-between gap-3">
        {cars.map((car) => (
          <CarCard
            model={car.model}
            background={car.background}
            price={car.price}
            recommended={car.recommended}
            image={car.image}
          />
        ))}
      </div>
    </Layout>
  );
};
export default Dashboard;
