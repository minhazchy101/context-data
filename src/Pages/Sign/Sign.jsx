import React, { use } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Lottie from 'lottie-react';

import signInLol from '../../assets/sign.json'

const Sign = () => {

     const {signIn} = use(AuthContext)
      const handleSignIn = (e)=>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
       console.log(email , password)
       signIn(email , password).then((userCredential) => {
    // Signed in 
    // const user = userCredential.user;
    console.log(userCredential)
    // ...
  })
  .catch((error) => {
    console.log(error)
    // const errorCode = error.code;
    // const errorMessage = error.message;
  });

    
      }
    return (
         <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">

     <Lottie animationData={signInLol} loop={true} style={{width : '300px'}} ></Lottie> 
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Sign In now!</h1>
        <form onSubmit={handleSignIn}>
          <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          {/* <div><a className="link link-hover">Forgot password?</a></div> */}
          {/* <button className="btn btn-neutral mt-4">SignIn</button> */}
          <input type="submit" className="btn btn-neutral mt-4" value="Sign In" />
        </fieldset> 
        </form>
        
      </div>
    </div>
  </div>
</div>
    );
};

export default Sign;