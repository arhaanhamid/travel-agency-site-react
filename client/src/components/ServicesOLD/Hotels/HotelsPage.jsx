import { useEffect, useState } from "react";
import { hotelsData } from "../../../assets/GlobalData";
import Services from "../../Services/Services";

const HotelsPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        // In a real scenario, fetch data from an API instead of hotelsData
        const res = hotelsData;
        setData(res);
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

  return <Services data={JSON.stringify(data)} requestFrom="hotels-page" />;
};

export default HotelsPage;
