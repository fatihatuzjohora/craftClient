import { useEffect, useState } from "react";
import SingleCraft from "../ExtraRoute/SingleCraft";

import { Link, useLoaderData } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const AllCraft = () => {
  const [data, setdata] = useState([]);
  const [limit, setLimit] = useState(6);
  useEffect(() => {
    fetch("https://craft-henna-iota.vercel.app/craft", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        setdata(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-5">
      <Typewriter
            words={['Craft Items Section',]}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
          
      </h1>
      <div
        data-aos="zoom-in"
        data-aos-duration="1700"
        className=" mt-10 grid grid-cols-1 md:grid-cols-3 gap-5"
      >
        {data?.slice(0, limit).map((item) => (
          <SingleCraft key={item._id} item={item}></SingleCraft>
        ))}
      </div>
      <div className=" items-center text-center mt-5 mb-5 ">
        {/* <button onClick={()=>setLimit(data.length)} className="btn">All data</button> */}
        <Link to={`allartcraft`}>
          <button className="btn text-xl p-2 font-bold">All data</button>
        </Link>
      </div>
    </div>
  );
};

export default AllCraft;
