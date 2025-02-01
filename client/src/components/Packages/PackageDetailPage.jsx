import { useEffect, useState } from "react";
import { Suspense } from "react";

import { useParams } from "react-router-dom";
import tripsData from "../../assets/TripsData";

import styles from "./singlePost.module.css";
import PackageCard from "./PackageCard";

const PackageDetailPage = () => {
  const [tripData, setTripData] = useState("");
  const [loading, setLoading] = useState(true);

  const { packageId } = useParams();

  useEffect(() => {
    async function getData() {
      try {
        console.log(packageId);
        console.log("id", tripsData[0].id);
        const data = tripsData.filter((item) => item.id == packageId);
        console.log("data", data);
        setTripData(data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
        setTripData([]);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, [packageId]);
  console.log(tripData);

  if (loading) {
    return <div>Loading...</div>; // Optionally display a loading state
  }
  return (
    <div>
      <div className={styles.container}>
        <div>{/* <PostCrousel plainPost={plainPost} /> */}</div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{tripData.title}</h1>
          <div className="flex gap-32 items-center">
            <div className="flex gap-10">
              {tripData && (
                <Suspense fallback={<div>Loading...</div>}>
                  <PackageCard trip={tripData} />
                </Suspense>
              )}
              <div className={styles.detailText}>
                <span className={styles.detailTitle}>Published</span>
                <span className={styles.detailValue}>
                  {/* {new Date(post.createdAt).toLocaleDateString()} */}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center bg-black text-white w-[100px] h-[40px] rounded-full font-bold hover:bg-white hover:text-black hover:border-2 hover:border-black cursor-pointer">
              Follow
            </div>
          </div>
          <div className={styles.content}>{tripData.desc}</div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetailPage;
