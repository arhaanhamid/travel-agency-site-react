import { useEffect } from "react";

const Testpage = () => {
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }, []);

  return <div>Testpage</div>;
};

export default Testpage;
