import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Services from "./Services";
import { hotelsData } from "../../assets/GlobalData";
import { carsData } from "../../assets/GlobalData";
import { boatsData } from "../../assets/GlobalData";
import packagesData from "../../assets/GlobalData";

const ServicesPage = () => {
  const { type } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // let apiUrl;
      // Decide which API endpoint to call based on "type"
      if (type === "packages") {
        // apiUrl = "https://your-api.com/hotels";
        setData(packagesData);
      } else if (type === "hotels") {
        // apiUrl = "https://your-api.com/hotels";
        setData(hotelsData);
      } else if (type === "boats") {
        // apiUrl = "https://your-api.com/boats";
        setData(boatsData);
      } else if (type === "cars") {
        // apiUrl = "https://your-api.com/cars";
        setData(carsData);
      } else {
        setError("Invalid service type");
        setLoading(false);
        return;
      }

      try {
        // const response = await fetch(apiUrl);
        // const result = await response.json();
        // setData(result);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    fetchData();
  }, [type]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Pass the fetched data to your Services component
  return <Services data={JSON.stringify(data)} />;
};

export default ServicesPage;
