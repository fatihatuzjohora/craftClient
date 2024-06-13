import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Typewriter } from "react-simple-typewriter";
AOS.init();

const ArtExtra = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://craft-henna-iota.vercel.app/art")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  console.log(data);

  return (
    <div>
      <h1 className="text-4xl  font-bold text-center mt-5 mb-5">
      <Typewriter
            words={['Art & Craft Categories',]}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
      </h1>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        {data.map((item) => {
          return (
            <div
              key={item._id}
              className="card shadow-md w-96 border text-primary-content"
            >
              <div className="card-body">
                <img data-aos='zoom-in' data-aos-duration='1700' className="h-[200px]" src={item.photo} alt="" />
                <p className="text-neutral-700 font-semibold ml-5">
                  {item.subcategoryName}
                </p>
                <div className="card-actions justify-center">
                  <Link to={`/artcradtex/${item._id}`}>
                    <button className="btn bg-slate-400">Touch Me</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArtExtra;
