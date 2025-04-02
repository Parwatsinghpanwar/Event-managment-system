import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/login.svg";
import Google from "../assets/google.svg";
import Facebook from "../assets/facebook.svg";
import { Helmet } from 'react-helmet-async';
import { useFirebase } from '../FirebaseContext';
import { createUserWithEmailAndPassword, updateProfile, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider , signOut } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signup() {
  const { auth } = useFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState(null);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };


  const handleSignup = async (e) => {
    e.preventDefault();


    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain at least one capital letter.");
      return;
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setPasswordError("Password must contain at least one special character.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      await updateProfile(userCredential.user, {
        displayName: displayName,
      });
      handleSignOut();
      toast.success("Signup successful!");
      setTimeout(() => {
        navigate('/login')
      }, 4000);

    } catch (error) {
      console.error(error.message);
      toast.error(`Signup failed.${error.message}`);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      toast.success('Signup with Google successful!');
      handleSignOut();
      navigate('/login');
    } catch (error) {
      console.error(error.message);
      toast.error('Signup with Google failed. Please try again.');
    }
  };

  const handleFacebookSignup = async () => {
    try {
      const provider = new FacebookAuthProvider();
      await signInWithPopup(auth, provider);
      toast.success('Signup with Facebook successful!');
      handleSignOut();
      navigate('/login');
    } catch (error) {
      console.error(error.message);
      toast.error('Signup with Facebook failed. Please try again.');
    }
  };

  return (
    <div className="py-8 lg:py-20 bg-gray-50">
      <Helmet>
        <title>Start Your Journey with Us: Sign Up</title>
      </Helmet>
      <section>
        <div className="flex md:gap-12 gap-16 items-center justify-center px-6 py-4 md:py-8 mx-auto lg:py-0">
          <div className="hidden md:inline-block">
            <img className="h-[591px] w-[608px]" src={Logo} alt="logo" />
          </div>
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-3xl mb-6 lg:mb-8">
                Create an account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSignup}>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your Name
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#3b82f6] focus:border-[#3b82f6] block w-full p-2.5"
                    placeholder="John Smith"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#3b82f6] focus:border-[#3b82f6] block w-full p-2.5"
                    placeholder="name@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#3b82f6] focus:border-[#3b82f6] block w-full p-2.5"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setPasswordError(null); 
                    }}
                    required
                  />
                </div>

                {passwordError && (
                  <div className="flex justify-start mt-3 ml-4 px-1">
                    <ul>
                      <li className="flex items-center py-1 gap-3 text-red-500">
                        <span className="text-lg h-6 w-6 text-center bg-red-100 rounded-full">
                          <ion-icon name="close"></ion-icon>
                        </span>
                        <span className="text-sm md:text-base">{passwordError}</span>
                      </li>
                    </ul>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full text-white bg-[#3b82f6] hover:bg-[#2563eb] focus:ring-4 focus:outline-none focus:ring-[#3b82f6] font-medium rounded-lg px-5 py-2.5 text-center"
                >
                  Sign Up
                </button>
                
                <button
                  type="button"
                  onClick={handleGoogleSignup}
                  className="w-full text-sm hover:bg-gray-200 focus:ring-4 border-2 border-gray-200 font-medium rounded-lg px-5 py-2 md:py-2.5 text-center"
                >
                  <div className="flex items-center justify-center gap-2">
                    <span>
                      <img src={Google} className="h-7 w-7" alt="" />
                    </span>
                    <p>Sign up with Google</p>
                  </div>
                </button>
                <button
                  type="button"
                  onClick={handleFacebookSignup}
                  className="w-full text-sm hover:bg-gray-200 focus:ring-4 border-2 border-gray-200 font-medium rounded-lg px-5 py-2.5 md:py-3.5 text-center"
                >
                  <div className="flex items-center justify-center gap-2">
                    <span>
                      <img src={Facebook} className="h-5 w-5" alt="" />
                    </span>
                    <p>Sign up with Facebook</p>
                  </div>
                </button>
              </form>
              <p className="text-sm font-light text-gray-500 text-center">
                Already have an account?{"  "}
                <Link to='/login'>
                  <span className="font-medium inline text-[#3b82f6] hover:underline md:text-base">
                    Log in
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <ToastContainer position="top-center" autoClose={3000}/>
    </div>
  );
}
