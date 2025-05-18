import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Users = () => {
  const allUsers = useLoaderData();
  const [users, setUsers] = useState(allUsers);
  console.log(users);

  const handleDelete = (id, uid) => {
    console.log('uid',uid);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/users/${id}?uid=${uid}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              console.log("delete data", data);
              const remainingUsers = users.filter((user) => user._id !== id);
              setUsers(remainingUsers);
              // sweetalert2
              Swal.fire({
                title: "Deleted!",
                text: "Your account has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <section>
      <h2 className="text-3xl text-center font-semibold my-5">
        Total users: {allUsers.length}
      </h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={user.photo} alt={user.name} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                      <div className="text-sm opacity-50">Bangladesh</div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">Details</button>
                  <button className="btn btn-ghost btn-xs">Edit</button>
                  <button
                    onClick={() => handleDelete(user._id, user.uid)}
                    className="btn btn-ghost btn-xs"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Users;
