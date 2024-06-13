import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Firebase/AuthProvider";
import { Helmet } from "react-helmet";

const AddCraftItem = () => {
  const { user } = useContext(AuthContext);
  const [data, setdata] = useState([]);
  const email = data?.filter((e) => e.email === user.email);

  //console.log(user.email);

  const handelAddCraftItem = (event) => {
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
    const newCraft = {
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
    //  console.log(newCraft);

    fetch("https://craft-henna-iota.vercel.app/craft", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "user added succefully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <div className="p-8">
        <Helmet>
          <title> Add Craft Items</title>
        </Helmet>
        <h1 className="text-4xl text-center m-10 font-extrabold">
          Add Craft Items
        </h1>
        <form onSubmit={handelAddCraftItem}>
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
                  defaultValue={user.email}
                  disabled
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
                  defaultValue={user.displayName}
                  disabled
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
                  type="number"
                  name="price"
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
                  type="number"
                  name="rating"
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
                  type="time"
                  name="processingTime"
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
                  placeholder="photo"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
          </div>

          <input type="submit" value="add Items" className="btn btn-block" />
        </form>
      </div>
    </div>
  );
};

export default AddCraftItem;
