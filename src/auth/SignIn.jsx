import React, { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { toast } from "react-toastify";

const SignIn = () => {
  const { userSignin, user } = useContext(AuthContext);
  console.log(user)
  const handleSignin=e=>{
    e.preventDefault();
    const form=e.target;
        const formData=new FormData(form);
        const email=formData.get('email');
        const password=formData.get('password');
        console.log(email, password);
        userSignin(email,password)
        .then((result)=>{
          const signinInfo={
            email,
            lastSignInTime: result.user?.metadata?.lastSignInTime
          }
          fetch(`http://localhost:4000/users/`, {
            method: 'PATCH',
            headers: {
              'content-type' : 'application/json'
            },
            body: JSON.stringify(signinInfo)
          })
          .then(res=>res.json())
          .then(data=>{
            console.log('update signin time patch', data)
          })
          const userEmail=result.user.email
          toast.success(`${userEmail} is signed in.`)
        })
  }
  return (
    <section>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SignIn now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSignin} className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button type="submit" className="btn btn-neutral mt-4">
                  SignIn
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
