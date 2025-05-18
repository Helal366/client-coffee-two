import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee,coffees, setCoffees }) => {
  // console.log(coffee);
  const { name, photoURL, price, quantity, _id } = coffee;

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log(result.isConfirmed)
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/coffees/${_id}`, {
          method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.deletedCount){

            console.log('delete in server', data)
            Swal.fire({
              title: "Deleted!",
              text: "Your coffee has been deleted.",
              icon: "success",
            });
            const remainingCoffees=coffees.filter(coff=>coff._id!==id);
            setCoffees(remainingCoffees)
          }
        })
      }
    });
  };
  return (
    <div className="card card-side bg-base-100 shadow-sm">
      <figure>
        <img src={photoURL} alt={name} />
      </figure>
      <div className="flex justify-around items-center w-full">
        <div>
          <h2 className="card-title">{name}</h2>
          <p>Price: Tk. {price}</p>
          <p>Quantity {quantity}</p>
        </div>
        <div className="card-actions ">
          <div className="join join-vertical space-y-2">
            <button className="btn join-item">Details</button>
            <Link to={`/update/${_id}`}>
              <button className="btn join-item">Edit</button>
            </Link>
            <button onClick={() => handleDelete(_id)} className="btn join-item">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
