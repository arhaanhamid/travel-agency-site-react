import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { useEffect, useState } from "react";
import Services from "./Services";
// import packagesData, { activitiesData, hotelsData, carsData, boatsData } from "../../../public/assets/GlobalData";
import ErrorPage from "../../ErrorPage";
import LoadingPage from "../../LoadingPage";
import api from "../../api";

const ServicesPage = () => {
  const { type } = useParams();
  const query = new URLSearchParams(useLocation().search);
  const defaultLoc = query.get("loc");
  const defaultTag = query.get("tag");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //useeffect to get data from db depending on the type
  useEffect(() => {
    async function fetchData() {
      let apiUrl;

      // Decide which API endpoint to call based on "type"
      if (type === "packages") {
        apiUrl = "packages";
      } else if (type === "hotels") {
        apiUrl = "hotels";
      } else if (type === "boats") {
        apiUrl = "boats";
      } else if (type === "activities") {
        apiUrl = "activities";
      } else if (type === "cars") {
        apiUrl = "cars";
      } else {
        console.log("Invalid service type");
        setError(true);
        return;
      }

      try {
        const response = await api.get(apiUrl);
        setData(response.data);
      } catch (err) {
        console.log("Failed to load data", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [type, defaultLoc, defaultTag]);

  if (error) return <ErrorPage />;
  if (loading || data === null) return <LoadingPage />;

  // Pass the fetched data to your Services component
  return (
    <Services
      data={JSON.stringify(data)}
      defaultLoc={defaultLoc}
      defaultTag={defaultTag}
    />
  );
};

export default ServicesPage;
