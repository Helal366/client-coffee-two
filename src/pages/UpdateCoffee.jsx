import React from "react";
import { useLoaderData } from "react-router";
import { toast } from "react-toastify";

const UpdateCoffee = () => {
  const updatedCoffee = useLoaderData();
  const { name, quantity, price, taste, photoURL, category, details, _id } =
    updatedCoffee;
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());
    console.log(newCoffee);
    fetch(`http://localhost:4000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success('Coffee data updated successfully')
        }
      });
  };
  return (
    <section>
      <h1 className="text-5xl font-semibold my-6 text-center">Update Coffee</h1>
      <form onSubmit={handleUpdate}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="Name"
              defaultValue={name}
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Price</label>
            <input
              type="number"
              name="price"
              className="input w-full"
              placeholder="Price"
              defaultValue={price}
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Quantity</label>
            <input
              type="number"
              name="quantity"
              className="input w-full"
              placeholder="Quantity"
              defaultValue={quantity}
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Category</label>
            <input
              type="text"
              name="category"
              className="input w-full"
              placeholder="Category"
              defaultValue={category}
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Taste</label>
            <input
              type="text"
              name="taste"
              className="input w-full"
              placeholder="Taste"
              defaultValue={taste}
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Details</label>
            <input
              type="text"
              name="details"
              className="input w-full"
              placeholder="Details"
              defaultValue={details}
            />
          </fieldset>
        </div>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
          <label className="label">PhotoURL</label>
          <input
            type="text"
            name="photoURL"
            className="input w-full"
            placeholder="PhotoURL"
            defaultValue={photoURL}
          />
        </fieldset>
        <button type="submit" className="w-full btn mt-4">
          Update Coffee
        </button>
      </form>
    </section>
  );
};

export default UpdateCoffee;
