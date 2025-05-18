import React, { useContext } from "react";
import { Link } from "react-router";
import AuthContext from "../contexts/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, userSignout } = useContext(AuthContext);
  // console.log(user);

  const handleSignout=()=>{
    userSignout()
    .then(()=>{
      toast.success(`Signout successful`)
    }).catch((error)=>{
      const errmsg=error.message;
      toast.error(errmsg);
    })
  }
  return (
    <nav className="bg-amber-200">
      <div className="flex justify-between px-4 sm:px-8 md:px-16 lg:px-20 xl:px-28 2xl:px-36 items-center h-24 ">
        <div>{user && user.email}</div>

        <div>
          <Link to="/">Home</Link> &nbsp; &nbsp;
          <Link to="/add-coffee">AddCoffee</Link> &nbsp; &nbsp;
          <Link to="/users">Users</Link>
        </div>
        <div>
          {user ? (
            <button onClick={handleSignout}
            >SignOut</button>
          ) : (
            <>
              <Link to="/signup">SignUp</Link> &nbsp; &nbsp;
              <Link to="/signin">SignIn</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
