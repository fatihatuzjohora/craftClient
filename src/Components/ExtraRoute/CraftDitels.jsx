import { useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData, useParams } from "react-router-dom";

const CraftDitels = () => {
  const items = useLoaderData();
  const { _id } = useParams();
  const [product, setProduct] = useState([]);
  const singleData = items.find((i) => i._id == _id);
  console.log(singleData);

  return (
    <div>
      <div className="mt-5 mb-5">
        <Helmet>
          <title>{singleData?.subcategoryName}</title>
        </Helmet>
        <h1 className="font-extrabold text-3xl md:text-5xl lg:text-5xl mx-auto items-center text-center mt-10 mb-10">
          Catagoris Detiles
        </h1>

        <div className=" card bg-base-100 shadow-xl p-6 border ">
          <div className=" ">
            <div>
              <figure>
                <img
                  className="rounded-xl md:h-[400px]"
                  src={singleData?.photo}
                  alt="image"
                />
              </figure>
            </div>
            <div className="ml-24">
              <h2 className=" md:text-3xl md:font-bold mt-5">
                Catagorie Name: {singleData?.craftName}
              </h2>

              <p className="font-bold md:text-2xl mt-3 ">
                Sub-Category Name :{singleData?.subcategoryName}
              </p>
              <p className="mt-3 md:text-2xl font-semibold  ">
                Description :{singleData?.shortDescription}
              </p>

              <h1 className="mt-2 md:text-2xl font-semibold ">
                price: {singleData?.price}
              </h1>
              <h1 className="mt-2 md:text-2xl font-semibold ">
                Rating: {singleData?.rating}
              </h1>
              <h1 className="mt-2 md:text-2xl font-semibold ">
                Processing Time: {singleData?.processingTime}
              </h1>
              <h1 className="mt-2 md:text-2xl font-semibold ">
                Stock Status: {singleData?.stockStatus}
              </h1>
              <h1 className="mt-2 md:text-2xl font-semibold ">
                Customization : {singleData?.customization}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftDitels;
