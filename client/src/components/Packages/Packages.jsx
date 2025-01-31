import { useEffect, useState } from "react";
import PackageSearch from "./PackageSearch";
import tripsData from "../../assets/TripsData";

const Packages = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        // In a real scenario, fetch data from an API instead of tripsData
        const trips = tripsData;
        setData(trips);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []); // Empty dependency array means this effect runs once on component mount

  if (loading) {
    return <div>Loading...</div>; // Optionally display a loading state
  }

  return <PackageSearch tripsData={JSON.stringify(data)} />;
};

export default Packages;
