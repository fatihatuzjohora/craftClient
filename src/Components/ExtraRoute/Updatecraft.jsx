import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Updatecraft = () => {
  const items = useLoaderData();
  const {
    _id,
    email,
    name,
    craftName,
    subcategoryName,
    shortDescription,
    price,
    rating,
    customization,
    processingTime,
    stockStatus,
    photo,
  } = items;

  const handelUpdateCraftItem = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const craftName = form.craftName.value;
    const subcategoryName = form.subcategoryName.value;
    const shortDescription = form.shortDescription.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processingTime = form.processingTime.value;
    const stockStatus = form.stockStatus.value;
    const photo = form.photo.value;
    const updateCraft = {
      email,
      name,
      craftName,
      subcategoryName,
      shortDescription,
      price,
      rating,
      customization,
      processingTime,
      stockStatus,
      photo,
    };
    //  console.log(updateCraft);

    fetch(`https://craft-henna-iota.vercel.app/craft/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success!",
            text: "Craft Update Succefully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
     
      <div className="p-8">
        <h1 className="text-4xl text-center m-10 font-extrabold">
          Update An Art & Craft Item <br /> {craftName}
        </h1>
        <form onSubmit={handelUpdateCraftItem}>
          {/* 1  */}
          <div className="flex  mb-5">
            <div className="form-control w-full mr-5">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <label className="input-group">
                <input
                  type="email"
                  name="email"
                  disabled
                  defaultValue={email}
                  placeholder="email"
                  className="input input-bordered w-full "
                />
              </label>
            </div>

            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <label className="input-group">
                <input
                  type="name"
                  name="name"
                  disabled
                  defaultValue={name}
                  placeholder="your name"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
          </div>
          {/* 2  */}
          <div className="flex  mb-5">
            <div className="form-control w-full mr-5">
              <label className="label">
                <span className="label-text">Craft Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="craftName"
                  defaultValue={craftName}
                  placeholder="craft name"
                  className="input input-bordered w-full "
                />
              </label>
            </div>

            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="price"
                  defaultValue={price}
                  placeholder="price"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
          </div>
          {/* 3 */}
          <div className="flex   mb-5">
            <div className="form-control w-full mr-5">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="shortDescription"
                  defaultValue={shortDescription}
                  placeholder="short description"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
          </div>
          {/* 4 suppleir*/}
          <div className="flex mb-5 ">
            <div className="form-control w-full mr-5">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="rating"
                  defaultValue={rating}
                  placeholder="rating"
                  className="input input-bordered w-full "
                />
              </label>
            </div>

            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Processing Time</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="processingTime"
                  defaultValue={processingTime}
                  placeholder="processing time"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
          </div>
          {/* 5*/}
          <div className="flex gap-5 mb-5">
            <div className="form-control w-full ">
              <select
                name="customization"
                defaultValue={customization}
                className="select select-success w-full"
              >
                <option disabled hidden selected>
                  Customization
                </option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>

            <div className="form-control w-full ">
              <select
                name="subcategoryName"
                defaultValue={subcategoryName}
                className="select select-success w-full"
              >
                <option disabled hidden selected>
                  Subcategory Name
                </option>
                <option>Landscape Painting</option>
                <option>Portrait Drawing</option>
                <option>Watercolour Painting</option>
                <option>Oil Painting</option>
                <option>Charcoal Sketching</option>
                <option>Cartoon Drawing</option>
              </select>
            </div>

            <div className="form-control w-full ">
              <select
                name="stockStatus"
                defaultValue={stockStatus}
                className="select select-success w-full "
              >
                <option disabled hidden selected>
                  Stock Status
                </option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
          </div>

          {/* 6*/}

          <div className="mb-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  defaultValue={photo}
                  placeholder="photo"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
          </div>

          <input type="submit" value="Update Items" className="btn btn-block" />
        </form>
      </div>
    </div>
  );
};

export default Updatecraft;
