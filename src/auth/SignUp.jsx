import React, { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { toast } from "react-toastify";

const SignUp = () => {
  
  const { userSignup } = useContext(AuthContext);
  
  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const { email, password, ...userProfile } = Object.fromEntries(
      formData.entries()
    );

    // const email=formData.get('email');
    // const password=formData.get('password');
    console.log(email, password, userProfile);
    // create user in the firebase
    userSignup(email, password)
      .then((result) => {
        const userEmail = result.user.email;
        toast.success(`You signed up as ${userEmail}`);

        const newUser = {
          ...userProfile,
          email,
          uid:result.user?.uid,
          creationTime: result.user?.metadata?.creationTime,
          lastSignInTime: result.user?.metadata?.creationTime,
        };
        //save profile info in the mongodb database
        fetch(`http://localhost:4000/users`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              console.log("user in mongodb", data);
              toast.success(`Your account has been created in mongodb.`);
              form.reset()
            }
          });
      })
      .catch((err) => {
        const errmsg = err.message;
        console.log(errmsg);
      });
  };
  return (
    <section>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SignUp now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSignup} className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Name"
                />
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Address</label>
                <input
                  type="text"
                  name="address"
                  className="input"
                  placeholder="Address"
                />
                <label className="label">Phone Number</label>
                <input
                  type="number"
                  name="phone"
                  className="input"
                  placeholder="Phone Number"
                />
                <label className="label">Photo URL</label>
                <input
                  type="text"
                  name="photo"
                  className="input"
                  placeholder="Photo URL"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />

                <button type="submit" className="btn btn-neutral mt-4">
                  SignUp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
