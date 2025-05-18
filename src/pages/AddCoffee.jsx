import React from 'react';
import { toast } from 'react-toastify';

const AddCoffee = () => {
    const handleSubmit=(e)=>{
            e.preventDefault();
            const form=e.target;
            const formData=new FormData(form);
            const newCoffee=Object.fromEntries(formData.entries());
            console.log(newCoffee);
            fetch(`http://localhost:4000/coffees`, {
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newCoffee)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.insertedId){
                    console.log(data);
                    toast.success('New Coffee added successfully');
                    form.reset();
                }
            })
        }
        // https://i.postimg.cc/JzpdXPyN/1.png;
        // https://i.postimg.cc/HnhhJCp8/2.png;
        // https://i.postimg.cc/gkyMFRh6/3.png;
        // https://i.postimg.cc/Tw9wvtT4/4.png;
        // https://i.postimg.cc/Tw9wvtT4/4.png;
        // https://i.postimg.cc/gjFf4p99/6.png;
    return (
        <section>
      <h1 className="text-5xl font-semibold my-6 text-center">Add Coffee</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="Name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Price</label>
            <input
              type="number"
              name="price"
              className="input w-full"
              placeholder="Price"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Quantity</label>
            <input
              type="number"
              name="quantity"
              className="input w-full"
              placeholder="Quantity"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Category</label>
            <input
              type="text"
              name="category"
              className="input w-full"
              placeholder="Category"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Taste</label>
            <input
              type="text"
              name="taste"
              className="input w-full"
              placeholder="Taste"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Details</label>
            <input
              type="text"
              name="details"
              className="input w-full"
              placeholder="Details"
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
          />
        </fieldset>
        <button type="submit" className="w-full btn mt-4">
          Add Coffee
        </button>
      </form>
    </section>
    );
};

export default AddCoffee;