//import { useLoaderData } from "react-router-dom";

const SectionCard = ({ items }) => {
  // const items = useLoaderData();

  // console.log(items);
  return (
    <div>
      <div
        data-aos="zoom-in"
        data-aos-duration="1700"
        className=" mt-10 grid grid-cols-1 md:grid-cols-3 gap-5"
      >
        {items.map((items) => {
          return (
            <div key={items._id}>
              <div className=" card bg-base-100 shadow-xl p-6 border ">
                <div className="">
                  <div className="">
                    <figure>
                      <img
                        data-aos="zoom-in-down"
                        data-aos-duration="1700"
                        className="rounded-xl w-full"
                        src={items.photo}
                        alt="image"
                      />
                    </figure>
                  </div>
                  <div className="">
                    <h2 className="mt-3 text-3xl font-bold">
                      Craft Name : {items.craftName}
                    </h2>
                    <h2 className="mt-3 text-3xl font-bold">
                      Category :{items.subcategoryName}
                    </h2>
                    <div className="mt-3 flex justify-between pl-4 pr-4">
                      <h1 className="text-2xl mt-3 font-semibold">
                        Price : {items.price}
                      </h1>
                      <h1 className="text-2xl mt-3 font-semibold">
                        {items.rating}
                      </h1>
                    </div>
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

export default SectionCard;
