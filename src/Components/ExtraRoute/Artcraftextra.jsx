
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Artcraftextra = () => {
  const [data, setData] = useState([]);
  const [datas, setdatas] = useState([]);
  const [art, setart] = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetch("https://craft-henna-iota.vercel.app/art")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  const findart = data.find((art) => art._id === id);
  console.log(findart);
  const findarts = findart?.subcategoryName;
  console.log(findarts);

  useEffect(() => {
    fetch("https://craft-henna-iota.vercel.app/craft")
      .then((res) => res.json())
      .then((data) => {
        setdatas(data);
        console.log(data);
      });
  }, []);
  console.log(datas);

  useEffect(() => {
    const filterdata = datas?.filter(
      (card) => card.subcategoryName === findarts
    );
    setart(filterdata);
  }, [data,datas]);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-5 mb-5">
      <Typewriter
            words={['Art & Craft Categories Card',]}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
          
        
      </h1>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2  gap-5">
        {art.map((singlecard) => {
          return (
            <div key={singlecard._id}>
              <div className="card card-side bg-base-100 shadow-xl p-2 border ">
                <figure>
                  <img
                    className="h-[200px] w-[300px] rounded-md"
                    src={singlecard.photo}
                    alt="Movie"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{singlecard.subcategoryName}</h2>
                  <p>{singlecard.craftName}</p>

                  <div className="card-actions justify-end">
                    <Link to={`/ditels/${singlecard._id}`}>
                      <button className="btn btn-primary">View Detials</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Artcraftextra;
