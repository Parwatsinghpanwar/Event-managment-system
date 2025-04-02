import React, { useState } from "react";
import Logo from "../assets/illustration.svg";
import { Helmet } from 'react-helmet-async';
import Google from "../assets/google.svg";
import Facebook from "../assets/facebook.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useFirebase } from '../FirebaseContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { 
  signInWithEmailAndPassword, 
  GoogleAuthProvider, 
  FacebookAuthProvider, 
  signInWithPopup 
} from 'firebase/auth';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { auth } = useFirebase();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {

      await signInWithEmailAndPassword(auth, email, password);

      toast.success("Signup successful!");
      navigate(location?.state ? location?.state : "/");
    } catch (error) {
      console.error(error.message);
  
      setLoginError("Invalid email or password");
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const userCredential = await signInWithPopup(auth, provider);

      navigate(location?.state ? location?.state : "/");
    } catch (error) {
      console.error(error.message);
  
      setLoginError("Failed to sign in with Google");
    }
  };

  const handleFacebookLogin = async () => {
    const provider = new FacebookAuthProvider();

    try {
      const userCredential = await signInWithPopup(auth, provider);

      navigate(location?.state ? location?.state : "/");
    } catch (error) {
      console.error(error.message);

      setLoginError("Failed to sign in with Facebook");
    }
  };

  return (
    <div className="py-8 lg:py-20 bg-gray-50">
      <Helmet>
        <title>Sign In to Your Account</title>
      </Helmet>
      <section>
        <div className="flex flex-row-reverse md:gap-12 gap-16 items-center justify-center px-6 py-4 md:py-8 mx-auto lg:py-0">
          <div className="hidden md:inline-block">
            <img src={Logo} alt="" />
          </div>
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-3xl mb-6 lg:mb-8">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
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
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

  
                {loginError && (
                  <div className="flex justify-start mt-3 ml-4 px-1">
                    <ul>
                      <li className="flex items-center py-1 gap-2 text-red-500">
                        <span className="text-lg h-6 w-6 text-center bg-red-100 rounded-full">
                          <ion-icon name="close"></ion-icon>
                        </span>
                        <span>{loginError}</span>
                      </li>
                    </ul>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-[#3b82f6]"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-500">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm lg:text-base font-medium text-[#3b82f6] hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-[#3b82f6] hover:bg-[#2563eb] focus:ring-4 focus:outline-none focus:ring-[#3b82f6] font-medium rounded-lg px-5 py-2.5 text-center"
                >
                  Sign in
                </button>

                <button
                  type="button" 
                  className="w-full text-sm hover:bg-gray-200 focus:ring-4 border-2 border-gray-200 font-medium rounded-lg px-5 py-2 md:py-2.5 text-center"
                  onClick={handleGoogleLogin}
                >
                  <div className="flex items-center justify-center gap-2">
                    <span>
                      <img src={Google} className="h-7 w-7" alt="" />
                    </span>
                    <p>Sign in with Google</p>
                  </div>
                </button>
                <button
                  type="button" 
                  className="w-full text-sm hover:bg-gray-200 focus:ring-4 border-2 border-gray-200 font-medium rounded-lg px-5 py-2.5 md:py-3.5 text-center"
                  onClick={handleFacebookLogin}
                >
                  <div className="flex items-center justify-center gap-2">
                    <span>
                      <img src={Facebook} className="h-5 w-5" alt="" />
                    </span>
                    <p>Sign in with Facebook</p>
                  </div>
                </button>

                <p className="text-sm font-light text-gray-500">
                  Don’t have an account yet?{"  "}
                  <Link to='/signup'>
                    <span
                      className="font-medium inline text-[#3b82f6] hover:underline md:text-base"
                    >
                      Sign Up
                    </span>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
}
